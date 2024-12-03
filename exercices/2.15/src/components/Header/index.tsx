import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const navigate = useNavigate();
    return (
      <header className="header">
        <h1  onClick={() => navigate("/")}>IMovies App</h1>
      </header>
    );
  }
  
  export default Header;

  