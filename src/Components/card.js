import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'; 
import SingleCard from "./singlecard"
import "../styles/card.css";

export default function Card() {
  return (
    <div className="container card">
      <div className="row">
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>

        
      </div>
    </div>
  );
}
