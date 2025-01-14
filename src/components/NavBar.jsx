import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // <!-- As a heading -->
//     <NavLink
//   to="/messages"
//   className={({ isActive, isPending }) =>
//     isPending ? "pending" : isActive ? "active" : ""
//   }
// >
//   Messages
// </NavLink>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="#">
          <i className="bi bi-film"></i> Vidly
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
            <Link to='/' className="nav-link fw-bold active"> Home </Link>
            </li>
            <li className="nav-item">
              <Link to='/customers' className="nav-link fw-bold"> Customers </Link>
            </li>
            <li className="nav-item">
            <Link to='/rentals' className="nav-link fw-bold"> Rentals </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
