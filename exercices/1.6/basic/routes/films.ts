import { Router } from "express";

import path from "node:path";
import {Film, NewFilm} from "../types";
import { parse } from "../utils/json";


const router = Router();

const jsonDbPath = path.join(__dirname, "/../data/films.json");

let requestCount = 0;
router.use((req, _res, next) => {
  if (req.method === "GET") {
    requestCount++;
    console.log(`GET counter ${requestCount}`);
  }
  next();
});


const defaultfilms:  Film[] =  [
  {
    id: 1,
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    duration: 181,
    budget: 356,
    description: "The Avengers assemble one final time to undo the damage caused by Thanos.",
    imageUrl: "https://example.com/endgame.jpg"
  },
  {
    id: 2,
    title: "Black Panther",
    director: "Ryan Coogler",
    duration: 134,
    budget: 200,
    description: "T'Challa returns to Wakanda to take his rightful place as king and defend his nation.",
    imageUrl: "https://example.com/blackpanther.jpg"
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    director: "Jon Watts",
    duration: 148,
    budget: 200,
    description: "Spider-Man faces multiversal threats as villains from other dimensions appear.",
    imageUrl: "https://example.com/spiderman.jpg"
  }
];
router.get("/", (req, res) => {

    if (req.query['minimum-duration'] === undefined) {
      return res.send(defaultfilms);
    }

    const minDuration = Number(req.query['minimum-duration'])

    if (isNaN(minDuration) || minDuration <= 0) {
      res.sendStatus(400);
    }
  
  const filteredFilms = defaultfilms.filter((film) => film.duration >= minDuration);
  
  return res.send(filteredFilms);
  });

  // Read the pizza identified by an id in the menu
  router.get("/:id", (req, res) => {
    
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.sendStatus(400);
    }

    const film = defaultfilms.find((film) => film.id === id);
    if (film === undefined) {
      return res.sendStatus(404);
    }

    return res.send(film);
  });


// Create a pizza to be added to the menu.
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

  const films = parse(jsonDbPath, defaultfilms);
  const newFilm = body as NewFilm;

  const nextId =
    films.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;

  const addedFilm: Film = { id: nextId, ...newFilm };

  films.push(addedFilm);

  return res.json(addedFilm);

});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id); 
  const index = defaultfilms.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404); 
  }
  const deletedElements = defaultfilms.splice(index, 1); 
  return res.json(deletedElements[0]); 
});


router.patch("/:id",(req,res)=>{
  const id = Number(req.params.id);
  
  if(isNaN(id)){
    return res.sendStatus(400);
  }
  
  const filmToUpdate = defaultfilms.find((film) => film.id === id);
  if (!filmToUpdate){
    return res.sendStatus(404);
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
  const updatedFilm = { ...filmToUpdate, ...body };

  defaultfilms[defaultfilms.indexOf(filmToUpdate)] = updatedFilm;

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

  // Challenge of ex1.6 : To be complete, we should check that the keys of the body object are only the ones we expect

  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const indexOfFilmToUpdate = defaultfilms.findIndex((film) => film.id === id);
  // Deal with the film creation if it does not exist
  if (indexOfFilmToUpdate < 0) {
    const newFilm = body as NewFilm;

    // Challenge of ex1.6 : To be complete, check that the film does not already exist
    const existingFilm = defaultfilms.find(
      (film) =>
        film.title.toLowerCase() === newFilm.title.toLowerCase() &&
        film.director.toLowerCase() === newFilm.director.toLowerCase()
    );

    if (existingFilm) {
      return res.sendStatus(409);
    }
    // End of challenge

    const nextId =
      defaultfilms.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;

    const addedFilm = { id: nextId, ...newFilm };

    defaultfilms.push(addedFilm);

    return res.json(addedFilm);
  }

  // Update the film
  const updatedFilm = { ...defaultfilms[indexOfFilmToUpdate], ...body } as Film;

  defaultfilms[indexOfFilmToUpdate] = updatedFilm;

  return res.send(updatedFilm);
});


export default router;


