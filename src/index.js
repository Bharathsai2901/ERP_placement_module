import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Navbar from "./Components/navbar.js";
// import Card from "./Components/card";
import SH from "./Components/student_home"
import Forgot from "./student_login";
import Dash from "./dashboard";
import Student from "./student_login_new"
// import Student from "./student_login";
import Jobdes from "./Components/job_des"
import Login from "./Components/login_new";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./home_style.css";
import "./style.css";
import "./styles/card.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>} />
        <Route path="/Student-login" element={<Student/>} />
        <Route path="/Student-home" element={<SH/>} />
        <Route path="/Job-description" element={<div><Navbar/><Jobdes/></div>} />
      </Routes>
          {/* <Student/>  */}
           {/* <Login />  */}

       {/* <Student/>  */}

        {/* <Navbar/> */}
         {/* <Card/>  */}
        {/* <Jobdes/>   */}
        </BrowserRouter>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
