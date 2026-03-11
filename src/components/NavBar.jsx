import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/add">Add Facility</Link></li>
        <li><Link className="nav-link" to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
