interface Movie {
    title: string;
    director: string;
    time : string;
    description?: string;
    image? : string;
    budget? : number;
  }
  
type NewMovie = Omit<Movie, "id">

export type { Movie, NewMovie };