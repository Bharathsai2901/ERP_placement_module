import React, {useEffect,useState} from "react";

import AppDetails from "./uploadresume"


export default function Review() {

  const [data, setData] = useState([])  
  
useEffect(async ()=>{
  const res = await fetch("/getAppliedDetails")
  const dataFromBack = await res.json()
  setData(dataFromBack)
}, []); 


 return (
   <div className="container card border-0">
     <div className="row">
       {data.map((eachItem)=><AppDetails details = {eachItem}/>)}
     </div>
   </div>
 );
  
}