import './Footer.css';
// Footer.jsx
  const Footer = () => {
    return (
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Marvel Movies | All Rights Reserved. 
          <br />
          <a href="https://example.com">Privacy Policy</a> | <a href="https://example.com">Terms of Service</a>
        </p>
      </footer>
    );
  }
  
  export default Footer;