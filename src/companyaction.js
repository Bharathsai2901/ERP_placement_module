import React from "react";
import "./styles/student_login_new.css";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className="wrapper wrapper1">
        <div>
          <div className="title">IIT Tirupati ERP</div>
          <form action="#" className="form">
            <div className="field">
              <input type="submit" value="Create new job" />
            </div>
          </form>
          <form action="#" className="form">
            <div className="field lastform">
              <input type="submit" value="Preview existing Jobs" />
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
}