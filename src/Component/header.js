import React from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
  return (

    <div className="header">
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            {/* Logo */}
            <NavLink className="navbar-brand" to="/">
              <img src="./logo192.png" width="70" height="70" />
            </NavLink>
            {/* Toggle Button for Mobile */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Links and Form */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><NavLink className="nav-link active" aria-current="page" to="/"> first</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/about">About</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/service">Services</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/blog">Blog</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/products">Products</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/managepost">Manage post</NavLink></li>

              </ul>

            </div>
          </div>
        </nav>

      </header>
    </div>
  )
};

export default Header;;