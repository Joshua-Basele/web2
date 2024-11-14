import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/Page/HomePage.tsx';
import MovieListePage from './components/Page/MovieListePage.tsx';
import CinemaPage from './components/Page/CinemaPage.tsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "movie-liste",
        element: <MovieListePage/>
      },
      {
        path: "cinema",
        element: <CinemaPage/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
