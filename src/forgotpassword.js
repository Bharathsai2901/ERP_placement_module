
import React from 'react';
import "./style.css";

export default function App(){
    return(
        
        
        <div className="box">
            <header className="header">
                <h3>Welcome to IIT Tirupati E-governance portal</h3>
            </header>
            <form className="form">
                <input className="input" type="text" placeholder="Enter Username" /><br />
                <input className="input" type="text" placeholder="Enter Password" /><br />
                <span><button className="button">Login</button></span>
                <span><button className="button">Reset</button></span>
                <h5 id="forgot-pass">Student corner</h5>
            </form>

        </div>
    )
}
