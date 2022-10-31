import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "../styles/card.css";
import SingleCard from "./Scard";

export default function Dynamic(props) {
  const {companyDetails} = props
  
  return (
    <div className="container card border-0">
      <marquee
        width="90%"
        direction="left"
        height="30%"
        behavior="alternate"
        //scrollamount="10"
        className="recent glow"
        // style={{border:"BLACK 3px SOLID"}}
      >
        Amazon has posted a new oppurtunity. Students must be validated before 20th.
        <br />
        Flipkart placement drive has been completed. The placement data must be updated by 25th.
      </marquee>
      <div className="row">
        {companyDetails.map((eachItem)=><SingleCard details = {eachItem} key = {eachItem._id}/>)}
      </div>
    </div>
  );
}
