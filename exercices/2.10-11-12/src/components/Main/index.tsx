import { Movie, NewMovie } from "../../types";
import AddMovie from "./AddMovieForm";
import { useState } from "react";
import MoviesCardsList from "./MoviesCardsList";

const marvelMovies: Movie[] = [
    {
          title: "Avengers: Infinity War",
          director: "Anthony Russo, Joe Russo",
          time: "2h 40m",
          description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
          image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
          budget: 325
      },
      {
          title: "Avengers: Endgame",
          director: "Anthony Russo, Joe Russo",
          time: "3h 2m",
          description: "After the devastating events of 'Avengers: Infinity War,' the remaining Avengers assemble once more in order to reverse Thanos' actions and restore order to the universe.",
          image: "https://musicstation.be/cdn/shop/files/Avengersendgamesoundtrack_460x@2x.webp?v=1722936529",
          budget: 356
      },
      {
          title: "Black Panther",
          director: "Ryan Coogler",
          time: "2h 14m",
          description: "T'Challa, the king of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider.",
          image: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
          budget: 200
      },
      {
          title: "Spider-Man: No Way Home",
          director: "Jon Watts",
          time: "2h 28m",
          description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds begin to appear, forcing Peter to discover what it truly means to be Spider-Man.",
          image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
          budget: 200
      },
      {
          title: "Guardians of the Galaxy Vol. 2",
          director: "James Gunn",
          time: "2h 16m",
          description: "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
          image: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_0771-scaled.jpeg",
          budget: 200
      }
    ];

const Main = () => {
    
    const [movies,setMovies] = useState(marvelMovies);

    const addMovie = (newMovie:NewMovie) => {   
        setMovies([...movies,newMovie]);
      };
    

    return(
        <main>
            <MoviesCardsList movies={movies}/>
            <AddMovie addMovie={addMovie}/>
        </main>
    );
}

export default Main;