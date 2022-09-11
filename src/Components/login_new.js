import React from "react";
import "../styles/student_login_new.css";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className="wrapper wrapper1">
        <div>
          <div className="title">IIT Tirupati ERP</div>
<<<<<<< HEAD
          <form action="http://programminghead.com" className="form">
=======
          <form action="#" className="form">
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
            <div className="field">
              <Link to="/Student-login">
                <input type="submit" value="Student Login" />
              </Link>
            </div>
          </form>
<<<<<<< HEAD
          <form action="http://programminghead.com" className="form">
=======
          <form action="#" className="form">
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
            <div className="field">
              <input type="submit" value="Staff Login" />
            </div>
          </form>
<<<<<<< HEAD
          <form action="http://programminghead.com" className="form">
            <div className="field lastform">
              <input type="submit" value="Company Login" />
=======
          <form action="#" className="form">
            <div className="field lastform">
            <Link to="/companylogin">
                <input type="submit" value="Company Login" />
              </Link>
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
