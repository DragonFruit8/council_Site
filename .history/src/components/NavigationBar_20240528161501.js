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
          <h1 className="fs-1" style={{ color: "rgba(140,100,200,1)" }}>Homepage</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5">
            
          </Nav>
        </Navbar.Collapse>
        </Navbar>
  )
}

export default NavigationBar