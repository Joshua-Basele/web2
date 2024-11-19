import { SyntheticEvent, useState } from "react";
import { Movie } from "../../types";
import './AddMovieForm.css';

interface AddMovieProps {
    addMovie: (movie: Movie) => void
};

const AddMovieForm = ({addMovie} : AddMovieProps) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [budget, setBudget] = useState(0);


    const handleSubmit = (e :SyntheticEvent) => {
        e.preventDefault();
        addMovie({ title, director, time, description, image, budget });
        setTitle("");
        setDirector("");
        setTime("");
        setImage("");
        setDescription("");
        setBudget(0);
    };

    
    return(
        <main>
            <form className="form-ajout" onSubmit={handleSubmit}>

                <label htmlFor="title">Title :</label>
                <input value={title} type="text" id="title" name="title"  onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="director">Director :</label>
                <input value={director} type="text" id="director" name="director"  onChange={(e) => setDirector(e.target.value)} required />

                <label htmlFor="time">Duration (en minutes) :</label>
                <input value={time} type="number" id="time" name="time" min="1"  onChange={(e) => setTime(e.target.value)} required />

                <label htmlFor="image">Link to an image (facultatif) :</label>
                <input value={image} type="url" id="image" name="image" placeholder="https://example.com/image.jpg"  onChange={(e) => setImage(e.target.value)}/>

                <label htmlFor="description">Description :</label>
                <textarea value={description} id="description" name="description"  onChange={(e) => setDescription(e.target.value)}></textarea>

                <label htmlFor="budget">Budget (en millions) :</label>
                <input value={budget} type="number" id="budget" name="budget" min="0" step="0.01" placeholder="Ex : 100"  onChange={(e) => setBudget(parseInt(e.target.value))}/>

                <button type="submit">Add Movie</button>

            </form>
        </main>
    );
}

export default AddMovieForm;