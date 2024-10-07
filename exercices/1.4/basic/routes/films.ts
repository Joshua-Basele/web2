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
      res.json("Wrong minimum duration");
    }
  
  const filteredFilms = defaultfilms.filter((film) => film.duration >= minDuration);
  
  return res.send(filteredFilms);
  });

  // Read the pizza identified by an id in the menu
router.get("/:id", (req, res) => {
  const films = parse(jsonDbPath, defaultfilms);
  const idInRequest = parseInt(req.params.id, 10);
  const indexOfFilmFound = films.findIndex(
    (film: Film) => film.id === idInRequest
  );

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  return res.json(films[indexOfFilmFound]);
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
    return res.json("Wrong body format");
  }

  const films = parse(jsonDbPath, defaultfilms);
  const newFilm = body as NewFilm;

  const nextId =
    films.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;

  const addedFilm: Film = { id: nextId, ...newFilm };

  films.push(addedFilm);

  return res.json(addedFilm);

});

export default router;


