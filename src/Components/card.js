import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card1 from "../Components/tempcards/card1";
import Card2 from "../Components/tempcards/card2";
import Card3 from "../Components/tempcards/card3";
import Card4 from "../Components/tempcards/card4";
import Card5 from "../Components/tempcards/card5";
import Card6 from "../Components/tempcards/card6";
import "../styles/card.css";

export default function Card() {
  return (
    <div className="container card border-0">
      <div className="row">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
        {/* <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard /> */}
      </div>
    </div>
  );
}
