import React, {useEffect,useState} from "react";

import AppDetails from "./uploadresume"


export default function Review() {

  const [data, setData] = useState([])  
  
useEffect(()=>{
  async function studentData(){
    const res = await fetch("/getStudents")
    const dataFromBack = await res.json()
    setData(dataFromBack)
    console.log(dataFromBack)
    }
  studentData()
}, []); 

 return (
   <div className="container card border-0">
     <div className="row">
     <h4 style={{ padding:20,
                textAlignVertical: 'center',
                textAlign:'center'}}> Review Application</h4>
        {data.message === "No data availaible" ? "applicants didn't applied yet!":data.map((items)=><AppDetails details = {items}/>)}
     </div>
   </div>
 );
  
}