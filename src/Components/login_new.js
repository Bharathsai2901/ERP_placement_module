import React from "react";
import "../styles/student_login_new.css";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className="wrapper wrapper1">
        <div>
          <div className="title">IIT Tirupati ERP</div>
          <form action="http://programminghead.com" className="form">
            <div className="field">
              <Link to="/Student-login">
                <input type="submit" value="Student Login" />
              </Link>
            </div>
          </form>
          <form action="http://programminghead.com" className="form">
            <div className="field">
              <input type="submit" value="Staff Login" />
            </div>
          </form>
          <form action="http://programminghead.com" className="form">
            <div className="field lastform">
            <Link to="/Company-login">
              <input type="submit" value="Company Login" />
            </Link>
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
