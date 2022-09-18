import React, { useEffect } from "react";
import { useState } from 'react';
import "../styles/apply.css";
import storage from "../firebase"
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import { v4 } from "uuid"

export default function Form() {
  const [open, setOpen] = React.useState(false);
  
  const handleToClose = (event, reason) => {
    if ("clickaway" == reason) return;
    setOpen(false);
  };
  
  const handleClickEvent = () => {
    setOpen(true);
  };


  const [studentDetails, setStudentDetails] = useState({
    availability:"", 
    internships:"", 
    workDone:""
  })

  const folderRef = ref(storage, "images/")
  const [updatedResume, setUpdatedResume] = useState([])

  const [unlockBtn, setUnlockBtn] = useState(false)

  const handleInput = async (event)=>{
    let name, value 
    name = event.target.name 
    if(name === "fileUpload"){
      value = event.target.files[0]
      const imageRef = ref(storage, `images/${value.name + v4()}`);
      const snapshot = await uploadBytes(imageRef, value)
      getDownloadURL(snapshot.ref).then((url)=>{
        setUpdatedResume((preState)=>[...preState, url])
        console.log("Got File!")
        setUnlockBtn(true)
      })
    }
    else{
      value = event.target.value
    }
    setStudentDetails({...studentDetails, [name]:value})
  }

  const submitResume = async (event)=>{
    event.preventDefault()
    const {availability, internships, workDone} = studentDetails
    try{
    const res = await fetch("/uploadResume", {
      method:"post", 
      headers:{
        "Content-Type":"application/json"
      }, 
      body:JSON.stringify({availability, internships, workDone, studentResume:updatedResume})
    })
    console.log(res.status)
  }
  catch(err){
    console.log(err.message)
  }
  }

  return (
      <div class="form-row align-items-center ">
          <h1 className="h1text">Job Application</h1>
          <form className="form-box">
          <div class="form-group">
          <label className="form-label" for="textarea"><p className="ques">Have you done any internships ?If yes please mention the details.</p></label> 
          <textarea id="textarea" name="internships" cols="40" rows="5" required="required" class="form-control" onChange = {handleInput}></textarea>
          </div>
          <div class="form-group">
          <label className="form-label" for="textarea1"><p className="ques">Are you available for 6 months ,starting immediately, for a full time work from home internship?If not,what is time period you are available for and the earliest date you can start this internship on ?</p></label> 
          <textarea id="textarea1" name="availability" cols="40" rows="5" class="form-control" onChange = {handleInput}></textarea>
          </div>
          <div class="form-group">
          <label className="form-label" for="textarea2"><p className="ques">Kindly give the details of sample applications developed by you.Please share the links if you have them.</p></label> 
          <textarea id="textarea2" name="workDone" cols="40" rows="5" class="form-control" onChange = {handleInput}></textarea>
          </div> 
            <div class="form-group">
            <label className="form-label" ><p className="ques">Please upload your resume here</p></label><br/>
            <input className="input" type="file" name = "fileUpload" onChange = {handleInput}/><br/><br/>

            {unlockBtn && <button type="submit" class="btn btn-success"  onClick = {submitResume}>Upload and submit</button>}
            </div>
            <div >
            </div>
          </form>
        </div>
  );
}