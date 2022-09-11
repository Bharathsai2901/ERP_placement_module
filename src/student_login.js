<<<<<<< HEAD

=======
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
import {React,  useState} from 'react';
import "./style.css";
import "./home_style.css";

export default function App(){
    const [user, setUser] = useState({
        Email:"", 
        password:""
    })
<<<<<<< HEAD
=======

  let name, value 
  const handleInput = (event)=>{
        name = event.target.name 
        value = event.target.value
    
        setUser({...user, [name]:value}) 
    }
  const checkDetails = ()=>{
      console.log(user)
  }
    return(
        
        <div className="box">
            <header className="header">
                <h3>Welcome to IIT Tirupati E-governance portal</h3>
            </header>
            <form className="form" method = "POST">
                <input className="input" type="text" placeholder="Enter Username" onChange = {handleInput} name = "Email" value = {user.Email}/><br />
                <input className="input" type="password" placeholder="Enter Password" onChange = {handleInput} name = "password" value = {user.password}/><br />
                <span><button className="button" onClick = {checkDetails}><a href="/studenthome" className="buttona">Login</a></button></span>
                <span><button className="button">Reset</button></span>
                <h5 id="forgot-pass">Student corner</h5>
            </form>
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18

  let name, value 
  const handleInput = (event)=>{
        name = event.target.name 
        value = event.target.value
    
        setUser({...user, [name]:value}) 
    }
  const checkDetails = ()=>{
      console.log(user)
  }
  return (
    <div>
      <div className="wrapper">
        <div>
          <div className="title">Student Login</div>
          <form> 
            <div className="field">
              <input type="text" onChange = {handleInput} name="Email" value = {user.Email} required />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="password" onChange = {handleInput} name="password" value = {user.password} required />
              <label>Password</label>
            </div>
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="field">
              <button type = "submit" className = "btn btn-primary w-100">Login</button>
            </div>
            {/* <div className="signup-link">
              Not a member? <a href="#">Signup now</a>
            </div> */}
          </form>
        </div>
<<<<<<< HEAD
      </div>
    </div>
  );
}
=======
    )
}
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
