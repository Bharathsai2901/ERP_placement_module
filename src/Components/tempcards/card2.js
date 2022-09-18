import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import ".../styles/card.css";
import { Outlet, Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="card-div zoom">
        <div className="col">
          <span className="Sector">Programming & IT</span>
          <h5>
            <a href="#">Software Developer Engineer - Full Stack</a>
          </h5>
          <ul>
            <li>
              <p>Canada</p>
            </li>
            <li>
              <p>Full Time</p>
            </li>
          </ul>
          <div className="card-last">
            <div className="company-info">
              <img
                src="https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo1.svg"
                alt=""
                data-pagespeed-url-hash="1931699050"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />
              <p>Google</p>
            </div>
          </div>
          <div className="Button-div">
            <Link to="/Job-description">
              <Button className="Apply-button" variant="primary">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
