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
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <h1 style={{ color: "rgba(140,100,200,1)" }}>Homepage</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5">
          <Nav.Link className="fs-5 text-white" as={Link} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link className="fs-5 text-white" as={Link} to="/about">
              About
            </Nav.Link>
          <NavDropdown className="fs-5 text-white" title="Resources">
              <NavDropdown.Item as={Link} to="/articles">
                Articles
              </NavDropdown.Item>
              <NavDropdown.Item className="fs-5 text-white" as={Link} to="/courses">
                Courses
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="fs-5 text-white" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
  )
}

export default NavigationBar