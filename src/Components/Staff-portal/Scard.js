import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import "../styles/card.css";
import { Outlet, Link } from "react-router-dom";


export default function SingleCard(props) {
  const {details} = props
  const {Jobtitle, companyName, Type, Location, companyLogo} = details

  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="card-div zoom staff-card">
        <div className="col">
          <span className="Sector">{Jobtitle}</span>
          <h5>
            <a href="#">{companyName}</a>
          </h5>
          <ul>
            <li>
              <p>{Location}</p>
            </li>
            <li>
              <p>{Type}</p>
            </li>
          </ul>
          <div className="card-last">
            <div className="company-info">
              <img
                src={companyLogo}
                style = {{width:"65px"}}
                className = "imageIcon"
                alt="CompanyLogo"
                data-pagespeed-url-hash="1931699050"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />
            </div>
          </div>
          <div className="Button-div">
            <Link to={{
                  pathname: "/verify",
                  search: `?companyName=${details.companyName}`
                }}>
              <Button className="Apply-button" variant="primary">
                Verify
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
