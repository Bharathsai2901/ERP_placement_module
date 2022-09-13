import React from "react";
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Jobdes from "./job_des"
import Row from "react-bootstrap/Row";
import "../styles/apply.css";

export default function Form() {
  

  const [studentDetails, setStudentDetails] = useState({
    availability:"", 
    assessment:{
      internships:"",
      wordDone:""
    }
  })

  const handleInput = (event)=>{
    let name, value 
    name = event.target.name 
    value = event.target.value 

    setStudentDetails({...studentDetails, [name]:value})
    
  }
  
  
  const submitResume = async (event)=>{
    event.preventDefault()
    const options = {
      method:'post', 
      headers:{
        "Content-Type":"application/json"
      }, 
      body:JSON.stringify(studentDetails)
    }
    try{
    const res = await fetch("/uploadResume", options)
    console.log(res.status)
    }
    catch(err){
      console.log(err.message)
    }
  }

  return (
    
   

      <div class="form-row align-items-center ">
          <h1 className="h1text">Job Application</h1>
          <form className="form-box">
          <div class="form-group">
          <label className="form-label" for="textarea"><p className="ques">Have you done any internships ?If yes please mention the details.</p></label> 
          <textarea id="textarea" name="textarea" cols="40" rows="5" required="required" class="form-control"></textarea>
          </div>
          <div class="form-group">
          <label className="form-label" for="textarea1"><p className="ques">Are you available for 6 months ,starting immediately, for a full time work from home internship?If not,what is time period you are available for and the earliest date you can start this internship on ?</p></label> 
          <textarea id="textarea1" name="textarea1" cols="40" rows="5" class="form-control"></textarea>
          </div>
          <div class="form-group">
          <label className="form-label" for="textarea2"><p className="ques">Kindly give the details of sample applications developed by you.Please share the links if you have them.</p></label> 
          <textarea id="textarea2" name="textarea2" cols="40" rows="5" class="form-control"></textarea>
          </div> 
            <div class="form-group">
            <label className="form-label" ><p className="ques">Please upload your resume here</p></label><br/>
            <input className="input" type="file"  /><br/><br/>

            <button type="submit" class="btn btn-primary"  onClick = {submitResume}>Upload and submit</button>
            </div>
            <div >
            </div>
          </form>
        </div>
  );
}