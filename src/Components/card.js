import React from "react";
import "../styles/card.css";
import SingleCard from "./singlecard"


export default function Card(props) {

  const {companyDetails} = props    

   return (
     <div className="container-fluid card border-0">
       <div className="row">
        {companyDetails.length === 0?<div className = "text-center">No Company Found!!</div>:companyDetails.map((eachItem)=><SingleCard details = {eachItem} key = {eachItem._id}/>)}
       </div>
     </div>
   );
    
}
