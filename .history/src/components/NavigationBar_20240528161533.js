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
      <Navbar.Brand as={Link} to='/' className="text-white">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link as={Link} to='/' className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to='/about' className="text-white">About</Nav.Link>
              <NavDropdown title="Issues" id="basic-nav-dropdown" className="text-white">
                  <NavDropdown.Item as={Link} to='/issues' className="text-dark">Topics</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/issues' className="text-dark">Topics</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/issues' className="text-dark">Topics</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/issues' className="text-dark">Topics</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar>
  )
}

export default NavigationBar