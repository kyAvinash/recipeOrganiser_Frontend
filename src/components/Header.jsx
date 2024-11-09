import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-light">
      <nav className="navbar navbar-expand-lg container py-2">
        <NavLink to="/" className="navbar-brand">
          Recipe Organiser
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/">
                <strong>Recipes</strong>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/addRecipe">
                <strong>Add Recipe</strong>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
