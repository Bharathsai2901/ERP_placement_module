import React from "react";
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Jobdes from "./job_des"
import Row from "react-bootstrap/Row";
import "../home_style.css"
export default function Login() {
  function sendalert() {
    alert('Your details have been recorded');
  }
  
      
  return (
    <div>
        <div>
          <div ><h1>Job Application</h1></div>
          <br/>
          <form action="#">
            <div>
            <h4><b>Avalability</b></h4>
            <br/>
            <h6> Are you available for 6 months ,starting immediately, for a full time work from home internship?
            <br/>If not,what is time periodyou are available for and the earliest date you can start this internship on ?</h6>
            <textarea type="text" class="form-control"placeholder="Enter Text" rows = "5"/>
            </div>
            <div >
              <h4><b>Assessment</b></h4>
              <br/>
              <h6>1.Have you done any internships ?If yes please mention the details.</h6>
              <br/>
              <textarea type="text" class="form-control"placeholder="Enter Text" rows = "5"/>
            </div>
            <div >
            <br/>
              <h6>2.Kindly give the details of sample applications developed by you.Please share the links if you have them.</h6>
              <br/>
              <textarea type="text" class="form-control" placeholder="Enter Text"  rows = "5"  /><br/>
            </div>
            <div>
            <h6>Please upload your resume here</h6><br/>
            <input type="file" /><br/><br/>
            <button type="submit">Upload</button>
            </div>
            <div >
            <br/>
            <Link to="/Job-description"><input type="submit" onClick={sendalert} value="Submit" /></Link>
            </div>
          </form>
        </div>
      <Outlet />
    </div>
  );
}