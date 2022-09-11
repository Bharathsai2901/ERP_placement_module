import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Navbar from "./Components/navbar.js";
// import Card from "./Components/card";
import SH from "./Components/student_home"
<<<<<<< HEAD
=======
import Companylogin from "./companylogin"
import Companyaction from "./companyaction"
import Form from "./Components/form"
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
import Forgot from "./student_login";
import Dash from "./dashboard";
import Student from "./student_login_new"
// import Student from "./student_login";
import Jobdes from "./Components/job_des"
import Login from "./Components/login_new";
<<<<<<< HEAD
import About from "./Components/about"
import Form from "./Components/form"
=======
import Forgotpass from "./forgotpassword";
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
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
<<<<<<< HEAD
        <Route path="/Student-login" element={<Student/>} />
        <Route path="/Student-home" element={<SH/>} />
        <Route path="/Job-description" element={<div><Navbar/><Jobdes/></div>} />
        <Route path="/about" element={<About/>} />
        <Route path="/form" element={<Form/>} />
      </Routes> 
          {/* <Student/>  */}
           {/* <Login />  */}

       {/* <Student/>  */}

        {/* <Navbar/> */}
         {/* <Card/>  */}
        {/* <Jobdes/>   */}
=======
         <Route path="/companylogin" element={<Companylogin/>} />
         <Route path="/companyaction" element={<Companyaction/>} />
        <Route path="/Student-login" element={<Student/>} />
        <Route path="/forgotpassword" element={<Forgotpass/>} />
        <Route path="/Student-home" element={<SH/>} />
        <Route path="/Job-description" element={<div><Navbar/><Jobdes/></div>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
        </BrowserRouter>

    </div>
  );
}

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById("root"));
=======
ReactDOM.render(<App />, document.getElementById("root"));
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18
