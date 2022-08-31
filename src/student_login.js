
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

        </div>
    )
}
