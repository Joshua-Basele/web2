import { Movie } from "../../types";
import MovieCard from "./MovieCard";

interface Movies {
    movies : Movie[]
  }

  const MoviesCardsList = (props: Movies) => (
    <div>
        {props.movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie}/>
        ))}
    </div>
  );

  export default MoviesCardsList;