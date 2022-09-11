import React from "react";
<<<<<<< HEAD
import "./styles/student_login_new.css"; 
=======
import "./styles/student_login_new.css";
<<<<<<< HEAD
import { useState} from "react"
import {useNavigate} from "react-router-dom"


export default function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    Email:"", 
    password:""
  })

  const [intiMsg, setMsg] = useState(true)
  const [initSpinner, setInitSpinner] = useState(false)

  let name, value 
  const handleInput = (event)=>{
    setMsg(true)
    
    name = event.target.name 
    value = event.target.value
    
    setUser({...user, [name]:value}) 
  }

  const logIn = async (event)=>{
    setInitSpinner(true)
    event.preventDefault()
    const {Email, password} = user 

    try{
    const result = await fetch("/login", {
      method:"post", 
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        Email, password
      })
    })
    setInitSpinner(false)
    const res = await result.json()
    if(result.status===400 || !res){
      setMsg(false)
    }
    else{
      navigate("/student-home")
    }
  }catch(err){
    console.log(err.message)
  }
    
  }

  const spinner = function(){
    if(initSpinner){
      return(
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      )
    }
    return "LogIn"
  }
  
=======
>>>>>>> 9a3a0c38dbd8a04da38121042a448c92fd1f64eb
import { Outlet, Link } from "react-router-dom";


export default function Login() {
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
  return (
    <div>
      <div className="wrapper">
        <div>
<<<<<<< HEAD
          <div className="title">Student Login</div>
          <form action="#">
            <div className="field">
              <input type="text" onChange = {handleInput} name = "Email" value = {user.Email} required />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="password" onChange = {handleInput} name = "password" value = {user.password} required />
=======
          <div className="title">Student Login </div>
          <form action="#">
            <div className="field">
              <input type="text" required />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="password" required />
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
              <label>Password</label>
            </div>
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <div className="pass-link">
<<<<<<< HEAD
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div>
              <p className = "warnMsg">{intiMsg?"":"Please provide a valid email address and password."}</p>
            </div>
            <div className="field">
              <button className = "btn btn-primary w-100" onClick = {logIn}>{spinner()}</button>
=======
                <a href="/forgotpassword">Forgot password?</a>
              </div>
            </div> 
            <div className="field">
            <Link to="/Student-home"><input type="submit" value="Login" /></Link>
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
            </div>
            {/* <div className="signup-link">
              Not a member? <a href="#">Signup now</a>
            </div> */}
          </form>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
}
=======
      <Outlet />
    </div>
  );
}
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
