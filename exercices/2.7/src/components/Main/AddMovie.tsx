import { SyntheticEvent, useState } from "react";
import { Movie } from "../../types";

interface AddMovieProps {
    addMovie: (movie: Movie) => void
};

const AddMovie = ({addMovie} : AddMovieProps) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [budget, setBudget] = useState(0);


    const handleSubmit = (e :SyntheticEvent) => {
        e.preventDefault();
        addMovie({ title, director, time, description, image, budget });
    };

    const handleTitleChange = (e : SyntheticEvent) => {
        const titleInput = e.target as HTMLInputElement;
        console.log("change in titleInput", titleInput.value);
        setTitle(titleInput.value);
    };

    const handleDirectorChange = (e: SyntheticEvent) => { 
        const directorInput = e.target as HTMLInputElement;
        console.log("change in directorInput", directorInput.value);
        setDirector(directorInput.value);
    };

    const handleTimeChange = (e: SyntheticEvent) => { 
        const timeInput = e.target as HTMLInputElement;
        console.log("change in timeInput", timeInput.value);
        setTime(timeInput.value);
    };
    
    const handleDescriptionChange = (e: SyntheticEvent) => { 
        const descriptionInput = e.target as HTMLTextAreaElement;
        console.log("change in descriptionInput", descriptionInput.value);
        setDescription(descriptionInput.value);
    };
    
    const handleImageChange = (e: SyntheticEvent) => { 
        const imageInput = e.target as HTMLInputElement;
        console.log("change in imageInput", imageInput.value);
        setImage(imageInput.value);
    };
    
    const handleBudgetChange = (e: SyntheticEvent) => { 
        const budgetInput = e.target as HTMLInputElement;
        console.log("change in budgetInput", budgetInput.value);
        const parsedBudget = parseInt(budgetInput.value);

        if (!isNaN(parsedBudget) && parsedBudget >= 0) {
            setBudget(parsedBudget);
          } else {
            setBudget(0); 
          }
    };
    
    return(
        <main>
            <form className="form-ajout" onSubmit={handleSubmit}>

                <label htmlFor="title">Titre :</label>
                <input value={title} type="text" id="title" name="title"  onChange={handleTitleChange} required />

                <label htmlFor="director">Réalisateur :</label>
                <input value={director} type="text" id="director" name="director"  onChange={handleDirectorChange} required />

                <label htmlFor="time">Durée (en minutes) :</label>
                <input value={time} type="number" id="time" name="time" min="1"  onChange={handleTimeChange} required />

                <label htmlFor="image">Lien vers une image (facultatif) :</label>
                <input value={image} type="url" id="image" name="image" placeholder="https://example.com/image.jpg"  onChange={handleImageChange}/>

                <label htmlFor="description">Description :</label>
                <textarea value={description} id="description" name="description"  onChange={handleDescriptionChange}></textarea>

                <label htmlFor="budget">Budget (en millions) :</label>
                <input value={budget} type="number" id="budget" name="budget" min="0" step="0.01" placeholder="Ex : 100"  onChange={handleBudgetChange}/>

                <button type="submit">Ajouter le film</button>

            </form>
        </main>
    );
}

export default AddMovie;