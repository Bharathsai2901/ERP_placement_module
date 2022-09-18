import React from "react";
import "../styles/login_erp.css";
import Container from "react-bootstrap/Container";
import { Outlet, Link } from "react-router-dom";

export default function App(){
    return(
        <div>
   <div class="page-wraper d-flex flex-column justify-content-center">
      <div class="logo fadeIn animated"><img className="Logo" src="https://iittp.plumerp.co.in/prod/iittirupati/res/images/iittirupati-logo.png"  /></div>
      <div class="welcome "> Welcome to IIT Tirupati E-Governance</div>
      <form classNme="login-form" method="post">
      <Link to="/Student-login">
         <input class="btn-login" type="submit" id="ssubmit" name="ssubmit" value="Student Login" /><br />
         </Link>
         <Link to="/Staff-login">
         <input class="btn-login" type="submit" id="fsubmit" name="ssubmit" value="Faculty / Staff Login" /><br />
         </Link>
         <Link to="/Company-login">
         <input class="btn-login" type="submit" id="fsubmit" name="ssubmit" value="Company Login" />
         </Link>
      </form>
   </div>
</div>
    )
}