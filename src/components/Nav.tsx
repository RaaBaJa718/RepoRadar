import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container">
      <h2>RepoRadar</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/candidates">Potential Candidates</Link></li>
        <li><Link to="/saved">Saved Candidates</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;