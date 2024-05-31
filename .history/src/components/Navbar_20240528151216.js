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
                <NavLink className="nav-link" to={"/action"}>Endorsements</NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown title="Resources">
              <NavDropdown.Item as={Link} to="/articles">
                Articles
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/courses">
                Courses
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <
    </nav>
  )
}

export default Navbar