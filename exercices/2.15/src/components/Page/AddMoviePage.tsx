import { useOutletContext } from "react-router-dom";
import { MoviesContext } from "../../types";
import AddMovieForm from "../Main/AddMovieForm"

const AddMoviePage = () => {
    
const { addMovie }: MoviesContext = useOutletContext();

    return (
        <main>
            <AddMovieForm addMovie={addMovie}></AddMovieForm>
        </main>
    )
}

export default AddMoviePage;