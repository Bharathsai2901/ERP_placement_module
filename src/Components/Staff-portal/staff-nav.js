import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
            <Nav.Link href="/staff-home" className="navitems">Home</Nav.Link>
            <Nav.Link href="/stats"  className="navitems">Stats</Nav.Link>
            <Nav.Link href="/reviewapplication"  className="navitems">Review</Nav.Link>
            <Nav.Link href="/sendnotify" className="navitems">E-mail</Nav.Link>
            <Nav.Link href="/" className="navitems">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;