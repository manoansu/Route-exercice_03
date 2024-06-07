import { Link, NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="navbar-content-container container">
        <Link to={`/`}>
          <h1 className="site-name">MyWebsite</h1>
        </Link>
        <nav>
          <div className="navbar">
            <NavLink to={`/home`} className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"}>
              HomePage
            </NavLink>
            <NavLink to={`/promotion`} className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"}>
              Promotion
            </NavLink>
            <NavLink to={`/sub`} className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"}>
              Participate
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
