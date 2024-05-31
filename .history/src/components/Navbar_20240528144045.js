import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {

  

  return (
    <nav id='navPosition' className="navbar position-sticky top-0 navbar-expand-lg top-0 navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>Homepage</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-5 justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav align-items-end">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/issues">Issues</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Get Involved
              </a>
              <ul className="dropdown-menu position-absolute" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "dropdown-item"
                } to={"/"}>Action</Link></li>
                <li><Link className="dropdown-item" to={"/"}>Contact</Link></li>
                <li><Link className="dropdown-item" to={"/"}>Endorsements</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar