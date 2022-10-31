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
              src="https://hdstockimages.com/wp-content/plugins/image-downloader-custom/temp/HDStockImages_premium_RITSC6.jpg"
              width="90"
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
            <Nav.Link href="/Add-job"  className="navitems">Add-Job</Nav.Link>
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