import { useMatch, useOutletContext } from "react-router-dom";
import { MoviesContext } from "../../types";
import MovieCard from "../Main/MovieCard";

const MoviePage = () => {
    const {movies}: MoviesContext = useOutletContext();

    const match = useMatch("/movies/:id");
    const movieId = Number(match?.params.id);
    if (isNaN(movieId)) return <p style={{ textAlign: 'center', fontSize: '70px', margin: '300px', color:'red' }}>MOVIE NOT FOUND</p>;
  
    const movieFound = movies.find((movie) => movie.id === movieId);
    if (!movieFound) return <p style={{ textAlign: 'center', fontSize: '70px', margin: '300px', color:'red'}}>MOVIE NOT FOUND</p>;

    
    return(
        <MovieCard movie={movieFound}/>
    );
};

export default MoviePage;