import React from "react";
import { useState } from 'react';
import "./styles/student_login_new.css";
import { Outlet, Link } from "react-router-dom";


export default function Login() {
    
      
  return (
    <div>
      <div className="wrapper">
        <div>
          <div className="title">Job Application</div>
          <form action="#">
            <div className="field">
              <h4><b>Assessment</b></h4>
              <h6>Have you done any internships ?</h6>
              <input type="textare" required />
              <label>Enter text</label>
            </div>
            <div className="field">
              <h6>Kindly give the details of sample applications developed by you</h6>
              <input type="textare" required />
              <label>Enter text</label>
            </div>
            <div className="field">
            <Link to="/Student-home"><input type="submit" value="Login" /></Link>
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
}