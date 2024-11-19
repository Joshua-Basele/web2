import { Link } from "react-router-dom";
import "./NavBar.css"; // Make sure to create this CSS file and import it here

const NavBar = () => {
    return (
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movie-liste" className="nav-link">List Movie</Link>
        <Link to="/cinema" className="nav-link">Cinema</Link>
        <Link to="/add-movie" className="nav-link">Add Movie</Link>
      </nav>
    );
};

export default NavBar;
