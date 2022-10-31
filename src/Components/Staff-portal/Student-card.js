import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import "../styles/card.css";
import { Outlet, Link } from "react-router-dom";

export default function SingleCard(props) {
  const {details} = props
  const {Name, companyName} = details
  

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card-div zoom staff-card">
        <div className="col">
          <span className="Sector">CSE</span>
          <h5>
            <a href="#">{Name}</a>
          </h5>
          <ul>
            <li>
              <p>3rd year</p>
            </li>
            <li>
              <p>Btech 2020</p>
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
              <p>{companyName}</p>
            </div>
          </div>
          <div className="Button-div">
            <Link to = {{
                  pathname: "/validate",
                  search: `?Email=${details.Email}&_id=${details._id}`
                }}>
              <Button className="Apply-button" variant="primary">
                Validate
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
