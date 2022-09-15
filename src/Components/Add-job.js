import React from 'react';
import Navbar from "./company-nav"
import  { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/profile.css"
import { Card, Row, Col, Container } from "react-bootstrap";

export default function Profile(){

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
                                        <input id="fname" type="text" className="form-control" placeholder="Job title"  />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label for="lname">Salary</label>
                                        <input id="lname" type="text" className="form-control" placeholder="Salary"  />
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="fname">Location</label>
                                        <input id="fname" type="text" className="form-control" placeholder="Location"  />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label for="lname" className="type">Type</label><br />
                                        <select id="lname" className="custom-select w-auto">
                                        <option value="Type">Full time</option>
                                        <option value="Type">Intern</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col">
                                        <div className="form-group">
                                            <label for="fname">Openings</label>
                                            <input id="fname" type="text" className="form-control" placeholder="Openings"  />
                                        </div>
                                </div>
                                <div className="col">
                                        <div className="form-group">
                                            <label for="fname">Apply before</label>
                                            <input id="fname" type="text" className="form-control" placeholder="Apply before"  />
                                        </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="desc">Job Description</label>
                                <textarea id="desc" rows="4" className="form-control" placeholder="Job description"></textarea>
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
                                    <div className="dz-preview dz-file-preview dz-clickable mr-3">
                                        <div className="avatar avatar-lg">
                                            <img src="https://lema.frontted.com/assets/images/account-add-photo.svg" className="avatar-img rounded" alt="..." data-dz-thumbnail="" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <button className="btn btn-sm btn-primary dz-clickable">Browse</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="desc2">Skills Required</label>
                                <textarea id="desc2" rows="4" className="form-control" placeholder="Skills required"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="desc2">Who can apply</label>
                                <textarea id="desc2" rows="4" className="form-control" placeholder="Who can apply"></textarea>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
                <div className="text-right mb-5">
                    <a href="" className="btn btn-success">Add</a>
                </div>
            </div>
        </div>
    )
}