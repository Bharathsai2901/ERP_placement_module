import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/job_des.css";
import Form from "./form"
import { render } from "react-dom";
import { Outlet, Link } from "react-router-dom";
export default function desc() {
  return (
    <div>
      <div className="job-post-company pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-7 col-lg-8 div-card">
              <div className="single-job-items mb-50">
                <div className="job-items">
                  <div className="company-img company-img-details">
                    <a href="#">
                      <img className="company-logo"
                        src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                        alt=""
                        data-pagespeed-url-hash="2733594701"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </a>
                  </div>
                  <div className="job-tittle">
                    <a href="#">
                      <h4>Software developer Engineer</h4>
                    </a>
                    <ul>
                      <li>Product management</li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>Hyderabad
                      </li>
                      <li>70k-80k</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="job-post-details">
                <div className="post-details1 mb-50">
                  <div className="small-section-tittle">
                    <h4>Job Description</h4>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="post-details2  mb-50">
                  <div className="small-section-tittle">
                    <h4>Skill(s) required</h4>
                  </div>
                  <ul>
                    <li>System Software Development</li>
                    <li>
                      Understanding client requirements and creating front-end
                      code in ReactJS
                    </li>
                    <li>
                      Creating layouts using CSS libraries like Bootstrap,
                      Bulma, and Tailwind
                    </li>
                    <li>Strong knowledge on software development life cycle</li>
                    <li>Writing clean code</li>
                  </ul>
                </div>
                <div className="post-details2  mb-50">
                  <div className="small-section-tittle">
                    <h4>Who can apply</h4>
                  </div>
                  <ul>
                    <li>are available for the work from home job/internship</li>
                    <li>
                      can start the work from home job/internship between 12th
                      Aug'22 and 16th Sep'22
                    </li>
                    <li>Ecommerce website design experience</li>
                    <li>are available for duration of 3 months</li>
                    <li>have relevant skills and interests</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 ">
              <div className="post-details3  mb-50 details-card">
                <div className="small-section-tittle">
                  <h4>Job Overview</h4>
                </div>
                <ul>
                  <li>
                    Posted date : <span>22 Aug 2022</span>
                  </li>
                  <li>
                    Location : <span>Hyderabad</span>
                  </li>
                  <li>
                    Vacancy : <span>10</span>
                  </li>
                  <li>
                    Job nature : <span>Full time</span>
                  </li>
                  <li>
                    Salary : <span>45LPA</span>
                  </li>
                  <li>
                    Apply before : <span>12 Sep 2022</span>
                  </li>
                </ul>
                <div className="apply-btn2">
                  <div className="Button-div">
                    <Link to = "/Form">
                      <Button className="Apply-button" variant="primary">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-details4  mb-50 details-card">
                <div className="small-section-tittle">
                  <h4>Company Information</h4>
                </div>
                <span><b className="cname">Amazon</b></span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <ul>
                  <li>
                    Name: <span>Amazon </span>
                  </li>
                  <li>
                    Web : <span> amazon.com</span>
                  </li>
                  <li>
                    Email: <span>bharatsaipadala@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}