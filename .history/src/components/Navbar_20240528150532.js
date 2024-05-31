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
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/issues"}>Issues</NavLink>
              
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/about"}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
            </li>

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/en"}>Login</NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar