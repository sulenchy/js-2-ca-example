import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar-ul">
      <li className="navbar-li">
        <NavLink 
          to={`login`}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Login
        </NavLink>
      </li>
      <li className="navbar-li">
        <NavLink
          to={`contact`}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Contact
        </NavLink>
      </li>
      
      <li className="navbar-li">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
      </li>
    </ul>
  );
}
export default Navbar;
