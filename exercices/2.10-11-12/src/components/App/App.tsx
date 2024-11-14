import './App.css'
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../Main/NavBar';

function App() {
  return (
    <div className="app-container">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}


export default App
