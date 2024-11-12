import { Movie } from "../../types";
import './MovieCard.css'
interface MovieCardProps{
    movie : Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <div className="movie-card">
            {movie.image && <img src={movie.image} className="movie-image" />}
            <div className="movie-details">
                <h1 className="movie-title">{movie.title}</h1>
                <p className="movie-director"><strong>Director:</strong> {movie.director}</p>
                <p className="movie-time"><strong>Duration:</strong> {movie.time}</p>
                {movie.description && <p className="movie-description"><strong>Description:</strong> {movie.description}</p>}
                {movie.budget !== undefined && !isNaN(movie.budget) && movie.budget !== 0 && (
                    <p className="movie-budget"><strong>Budget:</strong> ${movie.budget} millions</p>
                )}
            </div>
        </div>
    );
};

export default MovieCard;