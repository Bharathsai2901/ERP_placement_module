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
import Login from "./Components/login_erp";
import About from "./Components/about";
import Profile from "./Components/profile"
import Company from "./Components/Company-home"
import AddJob from "./Components/Add-job"
 import Apply from "./Components/apply"
import Nav2 from "./Components/company-nav"
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
        <Route path="/Company-login" element={<Company/>} />
        <Route path="/Student-home" element={<SH/>} />
        <Route path="/Job-description" element={<div><Navbar/><Jobdes/></div>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/Add-job" element={<AddJob/>} />
         <Route path="/Apply" element={<div><Navbar/><Apply/></div>} /> 
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
