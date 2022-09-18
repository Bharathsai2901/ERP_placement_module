import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/card.css";
import SingleCard from "./singlecard"


import { useEffect, useState } from 'react'


export default function Dynamic() {

    const [data, setData] = useState([])  
    
  useEffect(async ()=>{
    const res = await fetch("/uploadDetails")
    const dataFromBack = await res.json()
    setData(dataFromBack)
  }, []); 

   return (
     <div className="container card border-0">
       <div className="row">
         {data.map((eachItem)=><SingleCard details = {eachItem}/>)}
       </div>
     </div>
   );
    
}
