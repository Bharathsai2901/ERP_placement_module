import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../home_style.css"

function BasicExample() {
  return (
    <Navbar  expand="lg" className="Navbar">
      <Container>
      <Navbar.Brand href="/company-home">
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
            <Nav.Link href="/company-home" className="navitems">Home</Nav.Link>
            <Nav.Link href="/Add-job"  className="navitems">Add new job</Nav.Link>
            <Nav.Link href="/reviewapplication"  className="navitems">Review Applications</Nav.Link>
            <Nav.Link href="/sendnotify" className="navitems">Send notification</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;