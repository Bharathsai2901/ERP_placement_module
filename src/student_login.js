
import {React,  useState} from 'react';
import "./style.css";
import "./home_style.css";

export default function App(){
    const [user, setUser] = useState({
        Email:"", 
        password:""
    })

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
      </div>
    </div>
  );
}
