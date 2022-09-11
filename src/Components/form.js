import React from "react";
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Jobdes from "./job_des"
import Row from "react-bootstrap/Row";
import "../home_style.css"
<<<<<<< HEAD


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

=======
export default function Login() {
  function sendalert() {
    alert('Your details have been recorded');
  }
  
      
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
  return (
    <div>
        <div>
          <div ><h1>Job Application</h1></div>
          <br/>
<<<<<<< HEAD
          <form>
=======
          <form action="#">
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
            <div>
            <h4><b>Avalability</b></h4>
            <br/>
            <h6> Are you available for 6 months ,starting immediately, for a full time work from home internship?
            <br/>If not,what is time periodyou are available for and the earliest date you can start this internship on ?</h6>
<<<<<<< HEAD
            <textarea type="text" class="form-control"placeholder="Enter Text" rows = "5" onChange = {handleInput} name = "availability" value = {studentDetails.availability}/>
=======
            <textarea type="text" class="form-control"placeholder="Enter Text" rows = "5"/>
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
            </div>
            <div >
              <h4><b>Assessment</b></h4>
              <br/>
              <h6>1.Have you done any internships ?If yes please mention the details.</h6>
              <br/>
<<<<<<< HEAD
              <textarea type="text" class="form-control"placeholder="Enter Text" rows = "5" onChange = {handleInput} name = "internships" value = {studentDetails.internships}/>
=======
              <textarea type="text" class="form-control"placeholder="Enter Text" rows = "5"/>
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
            </div>
            <div >
            <br/>
              <h6>2.Kindly give the details of sample applications developed by you.Please share the links if you have them.</h6>
              <br/>
<<<<<<< HEAD
              <textarea type="text" class="form-control" placeholder="Enter Text"  rows = "5"  onChange = {handleInput} name = "wordDone" value = {studentDetails.wordDone}/><br/>
=======
              <textarea type="text" class="form-control" placeholder="Enter Text"  rows = "5"  /><br/>
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
            </div>
            <div>
            <h6>Please upload your resume here</h6><br/>
            <input type="file" /><br/><br/>
<<<<<<< HEAD
            <button type="submit" onClick = {submitResume}>Upload</button>
            </div>
            <div >
            <br/>
             
            </div>
          </form>
        </div>
      
=======
            <button type="submit">Upload</button>
            </div>
            <div >
            <br/>
            <Link to="/Job-description"><input type="submit" onClick={sendalert} value="Submit" /></Link>
            </div>
          </form>
        </div>
      <Outlet />
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
    </div>
  );
}