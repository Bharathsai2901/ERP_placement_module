import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SendMsg from "./Components/sendnotify";
import SH from "./Components/student_home";
import Forgot from "./forgotpassword";
import Dash from "./dashboard";
import Student from "./student_login_new";
import Nav1 from "../src/Components/student-nav";
import Staff from "../src/Components/Staff-portal/Staff_login";
import StaffHome from "../src/Components/Staff-portal/staffhome";
import VerifyStudent from "../src/Components/Staff-portal/verify";
import ValidateStudent from "../src/Components/Staff-portal/validate";
import CompanyL from "./Company_login";
import Jobdes from "./Components/job_des";
import Login from "./Components/login_erp";
import Profile from "./Components/profile";
import Company from "./Components/Company-home";
import AddJob from "./Components/Add-job";
import Apply from "./Components/apply";
import Resume from "./Components/resume";
import Userform from "./Components/Userform";
import Review from "./Components/reviewapplication";
import Nav2 from "./Components/company-nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./home_style.css";
import "./style.css";
import "./styles/card.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Student-login" element={<Student />} />
          <Route path="/forgotpassword" element={<Forgot />} />
          <Route path="/Student-home" element={<SH />} />
          <Route
            path="/Userform"
            element={
              <div>
                <Nav1 />
                <Userform />
              </div>
            }
          />
          <Route
            path="/Job-description"
            element={
              <div>
                <Nav1 />
                <Jobdes />
              </div>
            }
          />
          <Route path="/profile" element={<div><Nav1/><Profile /></div>} />
          <Route path="/Add-job" element={<AddJob />} />
          <Route
            path="/Apply"
            element={
              <div>
                <Nav1 />
                <Apply />
              </div>
            }
          />
        </Routes>
        <Routes>
          <Route path="/Staff-login" element={<Staff />} />
          <Route path="/Staff-home" element={<StaffHome />} />
          <Route path="/verify" element={<VerifyStudent />} />
          <Route path="/validate" element={<ValidateStudent />} />
        </Routes>
        <Routes>
          <Route path="/Company-login" element={<CompanyL />} />
          <Route path="/Company-home" element={<Company />} />
          <Route path="/reviewapplication" element={<Review />} />
          <Route path="/sendnotify" element={<div>
                <Nav2 />
                <SendMsg />
              </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
