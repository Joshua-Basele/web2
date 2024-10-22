import path from "node:path";

import { Film, NewFilm } from "../types";

import { serialize, parse } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms:  Film[] =  [
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

const readAll = (minimumDuration: number | undefined = undefined): Film[] => {
  const films = parse(jsonDbPath, defaultFilms);
  return minimumDuration
    ? films.filter((film) => film.duration >= minimumDuration)
    : films;
};

const readOne = (id: number): Film | undefined => {
  const films = parse(jsonDbPath, defaultFilms);
  return films.find((film) => film.id === id);
};

const createOne = (newFilm: NewFilm): Film | undefined => {
  const films = parse(jsonDbPath, defaultFilms);

  const existingFilm = films.find(
    (film) =>
      film.title.toLowerCase() === newFilm.title.toLowerCase() &&
      film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return undefined;
  }

  const film = { id: nextId(), ...newFilm };

  films.push(film);
  serialize(jsonDbPath, films);

  return film;
};

const deleteOne = (id: number): Film | undefined => {
  const films = parse(jsonDbPath, defaultFilms);

  const index = films.findIndex((film) => film.id === id);

  if (index === -1) {
    return undefined;
  }

  const [film] = films.splice(index, 1);
  serialize(jsonDbPath, films);

  return film;
};

const updateOne = (id: number, updatedFilm: Partial<NewFilm>): Film | undefined => {
  const films = parse(jsonDbPath, defaultFilms);

  const index = films.findIndex((film) => film.id === id);

  if (index === -1) {
    return undefined;
  }

  const film = { ...films[index], ...updatedFilm };

  films[index] = film;
  serialize(jsonDbPath, films);

  return film;
};

const updateOrCreateOne = (
  id: number,
  updatedFilm: NewFilm
): Film | undefined => {
  const films = parse(jsonDbPath, defaultFilms);

  const index = films.findIndex((film) => film.id === id);

  if (index === -1) {
    return createOne(updatedFilm);
  }

  const film = { ...films[index], ...updatedFilm };

  films[index] = film;
  serialize(jsonDbPath, films);

  return film;
};

const nextId = () =>
  parse(jsonDbPath, defaultFilms).reduce(
    (maxId, film) => Math.max(maxId, film.id),
    0
  ) + 1;

export { readAll, readOne, createOne, deleteOne, updateOne, updateOrCreateOne };