import { Link } from "react-router-dom";
import { Movie } from "../../types";
import './MovieTitleList.css';

interface MovieTileListProp{
    movies: Movie[];
}

const MovieTileList = ( {movies} : MovieTileListProp) => {
    return(
        <ul className="MovieTitleList">
            {movies.map((movie) => (
                <Link to={`/movies/${movie.id}`} className="MovieTitleListText">
                    <li key={movie.id}> {movie.title} </li>
                </Link>
            ))}
        </ul>
    );
}

export default MovieTileList;