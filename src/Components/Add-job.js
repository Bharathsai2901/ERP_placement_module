
import React from 'react';
import Button from "react-bootstrap/Button";
import Navbar from "./company-nav"
import  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from "./modal"
import "../styles/profile.css"
import storage from "../firebase"
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import { v4 } from "uuid"


export default function Profile(){

    const [modalShow, setModalShow] = React.useState(false);
    const [showMsg, setShowMsg] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [companyLogo, setCompanyLogo] = useState([])

    const [postjob, setpostjob] = useState({
        Jobtitle:"", 
        Salary:"",
        Location:"",
        Type:"Intern",
        Openings:"",
        Applybefore:"",
        Jobdescription:"",
        Skillsrequired:"",
        Whocanapply:""
    })
    const handleJobInput=async (event)=>{
        let name, value 
        name = event.target.name
        if(name === "browser"){
            value = event.target.files[0]
            setSpinner(true)
            const imageRef = ref(storage, `companyLogo/${value.name + v4()}`);
            const snapshot = await uploadBytes(imageRef, value)
            getDownloadURL(snapshot.ref).then((url)=>{
              setCompanyLogo((preState)=>[...preState, url])
              console.log("Got File!")
              setSpinner(false)
              setShowMsg(true)
            })
          }
          else{
            value = event.target.value
          }

        setpostjob({...postjob, [name]:value})
    }
    const Addjob = async (event) =>{
        event.preventDefault()
        

        const res = await fetch("/uploadDetails", {
            method:"post", 
            headers:{
                "Content-Type":"application/json"
            }, 
            body:JSON.stringify({...postjob, companyLogo:companyLogo[0]})
        })
        if(res.status === 201){
            // window.alert("Details have been recorded!")
            setModalShow(true)
        }
        else{
            console.log(res.status)
        }
    }

    return(
        <div>
            <Navbar/>
            <div className="container  page__container">
                <div className="card border-0 card-form">
                    <div className="row no-gutters ">
                        <div className="col-lg-4 card-body">
                            <p><strong className="headings-color">Job Details</strong></p>
                            <p className="text-muted mb-0">Please enter relevant details of the job.</p>
                        </div>
                        <div className="col-lg-8 card-form__body card-body">
                            <div className="row ">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="fname">Job title</label>
                                        <input id="fname" type="text" className="form-control" placeholder="Job title"  name = "Jobtitle" value = {postjob.Jobtitle} onChange = {handleJobInput}/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label for="lname">Salary</label>
                                        <input id="lname" type="text" className="form-control" placeholder="Salary"  name = "Salary" value = {postjob.Salary} onChange = {handleJobInput}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="fname">Location</label>
                                        <input id="fname" type="text" className="form-control" placeholder="Location" name = "Location" value = {postjob.Location} onChange = {handleJobInput} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label for="lname" className="type">Type</label><br />
                                        <select id="lname" className="custom-select w-auto" name = "Type" value={postjob.Type} onChange = {handleJobInput} >
                                        <option value="Full time">Full time</option>
                                        <option value="Intern" selected>Intern</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col">
                                        <div className="form-group">
                                            <label for="fname">Openings</label>
                                            <input id="fname" type="text" className="form-control" placeholder="Openings" name = "Openings" value = {postjob.Openings} onChange = {handleJobInput} />
                                        </div>
                                </div>
                                <div className="col">
                                        <div className="form-group">
                                            <label for="fname">Apply before</label>
                                            <input id="fname" type="date" className="form-control" placeholder="Apply before" name = "Applybefore" value = {postjob.Applybefore} onChange = {handleJobInput} />
                                        </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="desc">Job Description</label>
                                <textarea id="desc" rows="4" className="form-control" placeholder="Job description" name = "Jobdescription" value = {postjob.Jobdescription} onChange = {handleJobInput} ></textarea>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

                

                <div className="card border-0 card-form">
                    <div className="row  no-gutters">
                        <div className="col-lg-4 card-body">
                            <p><strong className="headings-color">Other Details</strong></p>
                            <p className="text-muted mb-0">Please fill the extra details</p>
                        </div>
                        <div className="col-lg-8 card-form__body card-body">
                            <div className="form-group">
                                <label>Relevant Documents(if any)</label>
                                <div className="dz-clickable media align-items-center" data-toggle="dropzone" data-dropzone-url="http://" data-dropzone-clickable=".dz-clickable" data-dropzone-files="[&quot;assets/images/account-add-photo.svg&quot;]">
                                    
                                    <div className="media-body"> 
                                        <label for = "uploadLogo" className = "btn btn-primary">
                                            {!spinner?"Browser":<div class="text-center">
                                                                    <div class="spinner-border" role="status">
                                                                        <span class="sr-only"></span>
                                                                    </div>
                                                                </div>}
                                        </label>
                                        <input type = "file" id = "uploadLogo" style = {{display:'none'}} name = "browser" onChange={handleJobInput}/>
                                        
                                    </div>
                                    {showMsg && <p>Got file!</p>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="desc2">Skills Required (e.g:html,css,..)</label>
                                <textarea id="desc2" rows="4" className="form-control" placeholder="Skills required" name = "Skillsrequired" value = {postjob.Skillsrequired} onChange = {handleJobInput} ></textarea>
                            </div>
                            <div className="form-group">
                                <label for="desc2">Who can apply(e.g:above cgpa8,graduated completed,..)</label>
                                <textarea id="desc2" rows="4" className="form-control" placeholder="Who can apply" name = "Whocanapply" value = {postjob.Whocanapply} onChange = {handleJobInput}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right mb-5">
                    {/* <a href="" className="btn btn-success">Add</a> */}

                    <Button className="btn btn-success" onClick={Addjob}>
                    Add
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    text="Job has been Posted successfully"
                    href="/Add-job"
                />
                </div>
            </div>
        </div>
    )
}
