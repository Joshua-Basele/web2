import { useOutletContext } from "react-router-dom";
import { MoviesContext } from "../../types";
import MovieTileList from "../Main/MovieTitleList";

const HomePage = () => {
  const { movies }: MoviesContext = useOutletContext();

    return(
        <div>
            <h1 style={{ textAlign: 'center', ...titreTextStyle }}>Welcome to iMovies !</h1>
            <p style={{textAlign: 'center', ...introTextStyle}}> iMovies is an application where you can discover the movies currently showing in UGC cinemas, as well as your favorite films.</p>
            <MovieTileList movies={movies}/>
        </div>
    )
}

const titreTextStyle = {
    paddingTop: '200px'
  };

const introTextStyle = {
    fontSize: '1.2rem',
    padding: '80px',
    color: '#777',
    fontWeight: 'bold',
  };
  

export default HomePage;