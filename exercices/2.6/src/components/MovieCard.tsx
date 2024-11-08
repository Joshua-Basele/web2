import { useState } from "react";
import { Movie } from "../types";
import "./MovieCard.css";

interface MovieCardProps{
    movie: Movie;
}

const MovieCard = (props: MovieCardProps) => {
  const [description, setDescription] = useState(false);

  return (
          <li className="movie-card">
            <strong onClick={() => setDescription(!description)}>{props.movie.title}</strong>
             - Réalisateur : {props.movie.director}
             <p>{description ? <i>{props.movie.description}</i> : null}</p>
          </li>
  )
};

export default MovieCard;