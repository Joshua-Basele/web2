interface Movie {
    id: number;
    title: string;
    director: string;
    time : string;
    description?: string;
    image? : string;
    budget? : number;
  }
  
  interface MoviesContext {
    movies: Movie[];
    addMovie: (NewMovie: NewMovie) => void;
  }

type NewMovie = Omit<Movie, "id">

export type { Movie, NewMovie, MoviesContext };