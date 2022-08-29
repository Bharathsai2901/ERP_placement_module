import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar.js";
import Card from "./Components/card";
import Forgot from "./student_login";
import Dash from "./dashboard";
// import Login from "./login_new"
import Student from "./student_login";
import Jobdes from "./Components/job_des"
import Login from "./login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./home_style.css";
import "./style.css";
import "./styles/card.css";

export default function App() {
  return (
    <div>
        {/* <Login/>  */}

       {/* <Student/>  */}

        <Navbar/>
          {/* <Card/> */}
        <Jobdes/>  

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
