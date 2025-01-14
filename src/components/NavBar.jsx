import React from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1" to="/">
          <i className="bi bi-film"></i> Vidly
        </Link>
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
            <NavLink to='/' className="nav-link fw-bold"> Movies </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/customers' className="nav-link fw-bold"> Customers </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/rentals' className="nav-link fw-bold"> Rentals </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
