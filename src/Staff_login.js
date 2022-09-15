import React from "react";
import "./styles/Staff_login.css";
import { Outlet, Link } from "react-router-dom";


export default function Login() {
  return (
    <div>
      <div className="wrapper">
        <div>
          <div className="title">Staff Login</div>
          <form action="#">
            <div className="field">
              <input type="text" required />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="password" required />
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
            <Link to="/Staff-home"><input type="submit" value="Login" /></Link>
            </div>
            {/* <div className="signup-link">
              Not a member? <a href="#">Signup now</a>
            </div> */}
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
