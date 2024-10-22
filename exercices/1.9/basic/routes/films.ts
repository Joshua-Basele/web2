import { Router } from "express";
import path from "node:path";
import {NewFilm} from "../types";
import { parse} from "../utils/json";
import { createOne, deleteOne, readAll, readOne, updateOne, updateOrCreateOne } from "../services/films";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const router = Router();

let requestCount = 0;
router.use((req, _res, next) => {
  if (req.method === "GET") {
    requestCount++;
    console.log(`GET counter ${requestCount}`);
  }
  next();
});



router.get("/", (req, res) => {
    const films = parse(jsonDbPath, readAll());
    if (req.query['minimum-duration'] === undefined) {
      return res.json(films);
    }

    const minDuration = Number(req.query['minimum-duration'])

    if (isNaN(minDuration) || minDuration <= 0) {
      res.sendStatus(400);
    }
  
  const filteredFilms = films.filter((film) => film.duration >= minDuration);
  
  return res.json(filteredFilms);
  });

  // Read the film identified by an id in the menu
  router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    
    if (isNaN(id)) {
      return res.sendStatus(400);
    }

    const film = readOne(id);

    if (film === undefined) {
      return res.sendStatus(404);
    }

    return res.send(film);
  });


// Create a Film to be added to the menu.
router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <=0
  ) {
    return res.sendStatus(400);
  } 

  const newFilm = body as NewFilm;
  const addedFilm = createOne(newFilm);

  if (!addedFilm) {
    return res.sendStatus(409);
  }

  return res.json(addedFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id); 
  
  if (isNaN(id)) {
    return res.sendStatus(404); 
  }
  const deletedElements = deleteOne(id)
  if(!deletedElements){
    return res.sendStatus(404);
  }
  return res.send(deletedElements); 
});


router.patch("/:id",(req,res)=>{
  const id = Number(req.params.id);
  
  if(isNaN(id)){
    return res.sendStatus(400);
  }
  
  const body: unknown = req.body

  if (
    !body ||
    typeof body !== "object" ||
    Object.keys(body).length === 0 ||
    ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }
  const updatedFilm = updateOne(id, body);

  if (!updatedFilm) {
    return res.sendStatus(404);
  }

  return res.send(updatedFilm);
  });

  

// Update a film only if all properties are given or create it if it does not exist and the id is not existant
router.put("/:id", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const createdOrUpdatedFilm = updateOrCreateOne(id, body as NewFilm);

  if (!createdOrUpdatedFilm) {
    return res.sendStatus(409); // Film already exists
  }

  return res.send(createdOrUpdatedFilm);
});



export default router;


