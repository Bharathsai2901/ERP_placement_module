import React from 'react';
import "./style.css";

export default function App(){
    return(
        <div className="box">
            <header className="header">
                <h3>Welcome to IIT Tirupati E-governance portal</h3>
            </header>
            <div className="Login-menu">
                <button className="login-button">Student Login</button><br />
                <button className="login-button">Staff Login</button><br />
                <button className="login-button">Company Login</button><br />
            </div>

        </div>
    )
}
