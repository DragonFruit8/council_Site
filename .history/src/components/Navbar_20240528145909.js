import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {

  // const isActive = (match, location) => {
  //   if (!match) {
  //     return false;
  //   }
  //   const { pathname } = location;
  //   return pathname === "/";
  // };
  

  return (
    <nav id='navPosition' className="navbar position-sticky top-0 navbar-expand-lg top-0 navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>Homepage</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-5 justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav align-items-end">
            <li className="nav-item">
              <NavLink className={({ isActive, isPending }) =>
                isPending ? "nav-link" : isActive ? "nav-link link-opacity-25" : "/"
              } to={"/"} aria-current="page" to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/issues">Issues</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Get Involved
              </a>
              <ul className="dropdown-menu position-absolute d-flex row" aria-labelledby="navbarDropdownMenuNavLink">
                <li><NavLink className={({ isActive, isPending }) =>
                  isPending ? "nav-link" : isActive ? "nav-link link-opacity-25" : "/"
                } to={"/"}>Action</NavLink></li>

                <li><NavLink className={({ isActive, isPending }) =>
                  isPending ? "nav-link dropdown-item d-flex" : isActive ? "nav-link link-opacity-25" : "/"
                } to={"/"}>Contact</NavLink></li>
                <li><NavLink className={({ isActive, isPending }) =>
                  isPending ? "nav-link dropdown-item d-flex" : isActive ? "nav-link link-opacity-25" : "/"
                } to={"/"}>Endorsements</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar