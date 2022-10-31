import React from "react";
import "../styles/login_erp.css";
import { Link } from "react-router-dom";

export default function App(){
    return(
        <div>
   <div className="page-wraper">
      <div className="logo fadeIn animated"><img className="Logo" src="https://iittp.plumerp.co.in/prod/iittirupati/res/images/iittirupati-logo.png"  /></div>
      <div className="welcome "> Welcome to IIT Tirupati E-Governance</div>
      <form className="login-form" method="post">
      <Link to="/Student-login">
         <input className="btn-login" type="submit" id="ssubmit" name="ssubmit" value="Student Login" /><br />
         </Link>
         <Link to = "/Staff-login">
            <input className="btn-login" type="submit" id="fsubmit" name="ssubmit" value="Faculty / Staff Login" /><br />
         </Link>
         <Link to="/Company-login">
         <input className="btn-login" type="submit" id="fsubmit" name="ssubmit" value="Company Login" />
         </Link>
      </form>
   </div>
</div>
    )
}