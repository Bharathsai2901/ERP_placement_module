import React, {useState, useEffect}  from "react";
import {useLocation} from "react-router-dom"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "../styles/card.css";
import SingleCard from "./Student-card";

export default function Dynamic() {
  const location = useLocation()
  const actualCompanyName = new URLSearchParams(location.search).get('companyName')
  const [studentDetails, setStudentDetails] = useState([])
  const url = `/getAppliedDetails/${actualCompanyName}`
  useEffect(()=>{
    async function getStudents(){
      const res = await fetch(url)
      const jsonData = await res.json()
      setStudentDetails(jsonData)
    }
    getStudents()
  }, [])
  
  console.log(studentDetails)

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
        Amazon has posted a new oppurtunity. Students must be validated before
        20th.
        <br />
        Flipkart placement drive has been completed. The placement data must be
        updated by 25th.
      </marquee>
      <div className="row">
        {/* {data.map((eachItem)=><SingleCard details = {eachItem}/>)} */}
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        
      </div>
    </div>
  );
}
