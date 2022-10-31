import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import "../styles/card.css";
import { Outlet, Link } from "react-router-dom";
import { FaCalendarTimes } from "react-icons/fa"

export default function SingleCard(props) {
  const {details} = props
  const {companyLogo, companyName, Jobtitle, Location, Type, Applybefore} = details
  
  var applyTime = new Date(Applybefore).getTime()
  var startTime = new Date(Date.now()).getTime()

  var timeElapse = applyTime - startTime
  var days = Math.floor(timeElapse / (1000 * 60 * 60 * 24))

  
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className={timeElapse<0 || days===0?"card-div warn_Background":"card-div zoom"}>
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
                className = "iconStyle"
                alt="companyLogo"
                data-pagespeed-url-hash="1931699050"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />
            </div>
          </div>
          <div className="Button-div">
            {timeElapse<0 || days===0?<Button className="Apply-button" variant="primary" type = "button" disabled>
            Apply Now
          </Button>:
          <Link to = {{
                  pathname: "/Job-description",
                  search: `?_id=${details._id}`
                }}>
                  <Button className="Apply-button" variant="primary" type = "button">
                    Apply Now
                  </Button>
            </Link>}
            
          </div>
          {timeElapse<0 &&<p className = "warn_Msg">*Application closed!</p>}
          {days===0&&<p className = "warn_Msg">*Application closed!</p>}
            
          {days>0  && <div className="d-flex flex-row text-center">
              <FaCalendarTimes className="m-1"/>
              <p className="warn_Msg">{days} days left for the application to end!</p>
          </div>}
          
        </div>
      </div>
      <Outlet />
    </div>
  );
}
