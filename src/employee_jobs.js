import React from 'react';
import "./style.css";

export default function App(){
    return(
        <div className="box">
            <header className="header">
                <h3>Welcome to IIT Tirupati E-governance portal</h3>
            </header>
            <div className="Login-menu">
                <button className="job-button">Exisiting Job</button><br />
                <button className="job-button">Create a new Job</button><br />
            </div>

        </div>
    )
}
