import React from "react";
import Navbar from "./company-nav"
import Button from "react-bootstrap/Button";
import Home from "./chome"
import { Outlet, Link } from "react-router-dom";


export default function App(){
    return(
        <div>
            <Navbar/>
            <Home/>
            
        </div>
    )
}