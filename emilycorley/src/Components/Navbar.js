import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
       <h1 className="title">Emily Corley</h1>
      <ul>
        <li><Link to="/">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/personal">Personal Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
};

export default Navbar;