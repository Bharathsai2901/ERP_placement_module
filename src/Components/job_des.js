import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import "../styles/job_des.css";
import {useLocation} from "react-router-dom"
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getMonth'
import getDate from 'date-fns/getDate'
import split from 'split-string'
import { Link } from "react-router-dom"
import { type } from "@testing-library/user-event/dist/type";

export default function Jobdes() {
  const location = useLocation()
  const singleCompanyId = new URLSearchParams(location.search).get('_id')
  const applyUrl = `/apply?_id=${singleCompanyId}`
  const [companyDetails, setCompanyDetails] = useState([])
const [appliedStatus, setAppliedStatus] = useState(false)
console.log(companyDetails)
  useEffect(()=>{
    async function fetchData() {
      const url = `/uploadDetails?_id=${singleCompanyId}`
    const res = await fetch(url)
    const jsonData = await res.json()
    
    const actualUrl = `/appliedStudent/${jsonData.companyName}/${jsonData.Jobtitle}`
    const result = await fetch(actualUrl)
    const partCompany = await result.json()
    setCompanyDetails(jsonData)
    setAppliedStatus(partCompany)
    }
    fetchData()
  }, [])
  
  const withDrawApp = ()=>{
    async function removeUser(){
      try{
      let url = `/removeApp/${appliedStatus.Jobtitle}`
      const finalRes = await fetch(url, {
        method:"delete"
      })
        console.log(finalRes.status)
      }
      catch(e){
        console.log(e.message)
      }
    }
    removeUser()
  }
  const {companyLogo, Jobdescription, Jobtitle, Location, Openings, Salary, Skillsrequired, Type, Applybefore, companyName} = companyDetails
  const myArr = split(`${Skillsrequired}`, { separator: ',' })

  return (
    <div>
      <div className="job-post-company pt-120 pb-120">
        <div className="container body-box">
          <div className="row justify-content-between">
            <div className="col-xl-7 col-lg-8 div-card">
              <div className="single-job-items mb-50">
                <div className="job-items">
                  <div className="company-img company-img-details">
                    <a href="#">
                      <img
                        className="company-logo"
                        src={companyLogo}
                        alt=""
                        data-pagespeed-url-hash="2733594701"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </a>
                  </div>
                  <div className="job-tittle">
                    <a href="#">
                      <h4>{Jobtitle}</h4>
                    </a>
                    <ul>
                      <li>Product management</li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>{Location}
                      </li>
                      <li>{Salary}</li>
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
                    {Jobdescription}
                  </p>
                </div>
                <div className="post-details2  mb-50">
                  <div className="small-section-tittle">
                    <h4>Skill(s) required</h4>
                  </div>
                  <ul>
                    {myArr.map((eachItem)=><li key={eachItem}>{eachItem}</li>)}
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
                    Location : <span>{Location}</span>
                  </li>
                  <li>
                    Vacancy : <span>{Openings}</span>
                  </li>
                  <li>
                    Job nature : <span>{Type}</span>
                  </li>
                  <li>
                    Salary : <span>{Salary}</span>
                  </li>
                  <li>
                    Apply before : <span>{`${getYear(new Date(Applybefore))}/${getMonth(new Date(Applybefore))+1}/${getDate(new Date(Applybefore))}`}</span>
                  </li>
                </ul>
                <div className="apply-btn2">
                  <div className="Button-div">
                    {!appliedStatus?
                      <Button
                        href={applyUrl}
                        className="Apply-button"
                        variant="primary">
                        Apply Now
                      </Button>
                      :
                    <div>
                      <Button className = "btn btn-primary m-3" href={applyUrl}>Edit</Button> 
                      <Button className = "btn btn-primary" onClick={withDrawApp}>withDraw</Button>
                    </div>}
                  </div>
                </div>
              </div>
              <div className="post-details4  mb-50 details-card">
                <div className="small-section-tittle">
                  <h4>Company Information</h4>
                </div>
                <span>
                  <b className="cname">{companyName}</b>
                </span>
                <p>
                  {Jobdescription}
                </p>
                <ul>
                  <li>
                    Name: <span>{companyName} </span>
                  </li>
                  <li>
                    Web : <span> {companyName}.com</span>
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
  )
  
}
