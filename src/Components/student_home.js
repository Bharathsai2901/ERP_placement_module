import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../home_style.css"
import { Search } from "react-bootstrap-icons";
import Card from "./card"
import { useEffect, useState } from 'react'


export default function App() {
    const [data, setData] = useState([])  
    const [actualRes, setActualRes] = useState([])
  
    useEffect(()=>{
      async function fetchData(){
        const res = await fetch("/uploadDetails")
        const dataFromBack = await res.json()
        setData(dataFromBack)
        setActualRes(dataFromBack)
        console.log(dataFromBack)
      }
      fetchData()
    }, []); 

    const getInputValue = (event)=>{
        const searchInput = event.target.value
        const finalResult = data.filter(items=>items.Jobtitle.toLowerCase().includes(searchInput.toLowerCase()))
        setActualRes(finalResult)
    }

    return(
        <div>

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
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange = {getInputValue}
          />
        </Form>
          <Nav.Link href="/student-home" className="navitems">Home</Nav.Link>
          <Nav.Link href="/Userform" target="_blank" className="navitems">Resume</Nav.Link>
          <NavDropdown href="/student-home" title="References" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://cdc.iittp.ac.in/images/iit/IITT%20CDC%20Annual%20Report-2021-2022.pdf" target="_blank">Previous year stats</NavDropdown.Item>
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

  <Card companyDetails = {actualRes}/>
            
        </div>
    )
}