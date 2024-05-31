import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../App.css'

const NavigationBar = () => {

  // const isActive = (match, location) => {
  //   if (!match) {
  //     return false;
  //   }
  //   const { pathname } = location;
  //   return pathname === "/";
  // };
  

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <h1 style={{ color: "rgba(80,0,200)" }}>Desirae 4 Ypsi</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="fs-4" as={Link} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link className="fs-4" as={Link} to="/about">
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
          <Nav.Link className="fs-4" as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar