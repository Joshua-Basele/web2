import { Movie } from "../../types";
import MovieCard from "./MovieCard";

interface CinemaProps {
    name: string;
    movies : Movie[]
  }

  const Cinema = (props: CinemaProps) => (
    <div className="cinema" >
      <h2 style={{textAlign: 'center'}}>{props.name}</h2>
      <ul>
        {props.movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie}/>
        ))}
      </ul>
    </div>
  );

  export default Cinema;