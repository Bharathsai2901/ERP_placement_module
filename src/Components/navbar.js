import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../home_style.css"
import { Outlet, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar  expand="lg" className="Navbar">
      <Container>
      <Navbar.Brand href="/student-home">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/b/b0/Indian_Institute_of_Technology_Tirupati_Logo.svg"
              width="60"
              height="60"
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">E-Governance Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" class="navmenu">
          <Nav className="me-auto" >
            <Nav.Link href="/student-home" className="navitems">Home</Nav.Link>
            <Nav.Link href="https://rsoftiittp.herokuapp.com/" target="_blank" className="navitems">Generate Resume</Nav.Link>
            <NavDropdown href="/student-home" title="References" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Previous year stats</NavDropdown.Item>
              <NavDropdown.Item href="https://udaaniitt.in/">
                Experiences
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mock tests</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown href="/student-home" title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Profile" className="navitems">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/" className="navitems">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;