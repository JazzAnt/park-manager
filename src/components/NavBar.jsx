import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navigationBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Facility</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
