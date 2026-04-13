import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link className="nav-link" to="/">All Facilitites</Link></li>
        <li><Link className="nav-link" to="/categories">Categorized List</Link></li>
        <li><Link className="nav-link" to="/add">Add Facility</Link></li>
        <li><Link className="nav-link" to="/metrics">Performance Metrics</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
