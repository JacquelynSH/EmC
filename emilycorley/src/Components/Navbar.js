import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/personal">Personal Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}