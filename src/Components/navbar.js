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
      <Navbar.Brand href="#home">
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
<<<<<<< HEAD
            <Nav.Link href="/" className="navitems">Home</Nav.Link>
=======
            <Nav.Link href="#home" className="navitems">Home</Nav.Link>
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
            <Nav.Link href="https://rsoftiittp.herokuapp.com/" target="_blank" className="navitems">Generate Resume</Nav.Link>
            <NavDropdown title="References" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Previous year stats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Experiences
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mock tests</NavDropdown.Item>
            </NavDropdown>
<<<<<<< HEAD
            <Nav.Link href="/about" className="navitems">Profile</Nav.Link>
=======
            <Nav.Link href="#link" className="navitems">Profile</Nav.Link>
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;