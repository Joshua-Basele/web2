import {MoviesContext } from "../../types";

import MoviesCardsList from "../Main/MoviesCardsList";
import { useOutletContext } from "react-router-dom";



const MovieListePage = () => {
    
    const {movies} : MoviesContext = useOutletContext();

    return(
        <main>
            <MoviesCardsList movies={movies}/>
        </main>
    );
}

export default MovieListePage;