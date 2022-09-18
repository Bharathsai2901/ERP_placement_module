import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar"
// import Avatar from 'react-avatar';
import "../styles/profile.css"
import React from "react";

export default function Profile(){

    return(
        <div>
            <Navbar/>
            <div className="container  page__container">
                <div className="card border-0 card-form">
                    <div className="row no-gutters ">
                        <div className="col-lg-4 card-body">
                            <p><strong className="headings-color">Basic Information</strong></p>
                            <p className="text-muted mb-0">Edit your account details and settings.</p>
                        </div>
                        <div className="col-lg-8 card-form__body card-body">
                            <div className="row ">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="fname">First name</label>
                                        <input id="fname" type="text" className="form-control" placeholder="First name"  />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label for="lname">Last name</label>
                                        <input id="lname" type="text" className="form-control" placeholder="Last name"  />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="desc">Bio / Description</label>
                                <textarea id="desc" rows="4" className="form-control" placeholder="Bio / description ..."></textarea>
                            </div>
                            <div className="form-group">
                                <label for="country">Country</label><br />
                                <select id="country" className="custom-select w-auto">
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                </select>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="card border-0 card-form">
                    <div className="row no-gutters">
                        <div className="col-lg-4 card-body">
                            <p><strong className="headings-color">Update Your Password</strong></p>
                            <p className="text-muted mb-0">Change your password.</p>
                        </div>
                        <div className="col-lg-8 card-form__body card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="opass">Old Password</label>
                                        <input id="opass" type="password" className="form-control" placeholder="Old password" value="" />
                                    </div>
                                    <div className="form-group">
                                        <label for="npass">New Password</label>
                                        <input id="npass" type="password" className="form-control is-invalid" />
                                        <small className="invalid-feedback">The new password must not be empty.</small>
                                    </div>
                                    <div className="form-group">
                                        <label for="cpass">Confirm Password</label>
                                        <input id="cpass" type="password" className="form-control" placeholder="Confirm password" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0 card-form">
                    <div className="row  no-gutters">
                        <div className="col-lg-4 card-body">
                            <p><strong className="headings-color">Profile Settings</strong></p>
                            <p className="text-muted mb-0">Update your public profile with relevant information.</p>
                        </div>
                        <div className="col-lg-8 card-form__body card-body">
                            <div className="form-group">
                                <label>Profile Picture</label>
                                <div className="dz-clickable media align-items-center" data-toggle="dropzone" data-dropzone-url="http://" data-dropzone-clickable=".dz-clickable" data-dropzone-files="[&quot;assets/images/account-add-photo.svg&quot;]">
                                    <div className="dz-preview dz-file-preview dz-clickable mr-3">
                                        <div className="avatar avatar-lg">
                                            <img src="https://lema.frontted.com/assets/images/account-add-photo.svg" className="avatar-img rounded" alt="..." data-dz-thumbnail="" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <button className="btn btn-sm btn-primary dz-clickable">Choose photo</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="desc2">Description</label>
                                <textarea id="desc2" rows="4" className="form-control" placeholder="Description ..."></textarea>
                            </div>

                            
                        </div>
                    </div>
                </div>
                <div className="text-right mb-5">
                    <a href="" className="btn btn-success">Save</a>
                </div>
            </div>
        </div>
    )
}