import React from "react";
import Nav3 from "./staff-nav";
import "./styles/validate.css"

export default function Validate() {
  return (
    <div>
      <Nav3 />

      <section style={{ backgroundColor: "#fff" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4 border-0">
                <div class="card-body text-center card-div zoom">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    class="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 class="my-3">G. Roshan</h5>
                  <p class=" id text-muted mb-1">Bachelor of Technology</p>
                  <p class="id text-muted mb-1">CSE</p>
                  <p class="id text-muted mb-1">2020 Batch</p>
                  <p class="id text-muted mb-4">AB+ Blood group</p>
                  <div class="d-flex justify-content-center mb-2">
                    <button type="button" class="btn btn-primary">
                      Mail
                    </button>
                    <button type="button" class="btn btn-outline-primary ms-1">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="card mb-4 border-0">
                <div class="card-body card-div ">
                  <div class="row validate-row">
                    <div class="col-lg-10">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-lg-5">
                      <p class="text-muted mb-0">Ganthakora Roshan</p>
                    </div>
                    <div class="col-lg-5">
                      <p class="text-muted mb-0">G.Roshan</p>
                    </div>
                    <div class="col-lg-2">
                      <a class="resume-link">Raise</a>
                    </div>
                  </div>
                  <hr class="line"/>
                  <div class="row validate-row">
                    <div class="col-lg-10">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-lg-5">
                      <p class="text-muted mb-0">cs20b010@iittp.ac.in</p>
                    </div>
                    <div class="col-lg-5">
                      <p class="text-muted mb-0">cs20b010@iittp.ac.in</p>
                    </div>
                    <div class="col-lg-2">
                      <a class="resume-link">Raise</a>
                    </div>
                  </div>
                  <hr class="line"/>
                  <div class="row validate-row">
                    <div class="col-lg-10">
                      <p class="mb-0">CGPA</p>
                    </div>
                    <div class="col-lg-5">
                      <p class="text-muted mb-0">8.00</p>
                    </div>
                    <div class="col-lg-5">
                      <p class="text-muted mb-0">8.60</p>
                    </div>
                    <div class="col-lg-2">
                      <a class="resume-link">Raise</a>
                    </div>
                  </div>
                  <hr class="line" />
                  <div class="row validate-row">
                    <div class="col-lg-10">
                      <p class="mb-0">DOB</p>
                    </div>
                    <div class="col-lg-5">
                      <p class="text-muted mb-0">29-01-2003</p>
                    </div>
                    <div class="col-lg-5">
                      <p class="text-muted mb-0">29-01-2003</p>
                    </div>
                    <div class="col-lg-2">
                      <a class="resume-link">Raise</a>
                    </div>
                  </div>
                  <hr class="line" />
                  <div class="row validate-row">
                    <div class="col-lg-10">
                      <p class="mb-0">Active Backlogs</p>
                    </div>
                    <div class="col-lg-5">
                      <p class="text-muted mb-0">0</p>
                    </div>
                    <div class="col-lg-5">
                      <p class="text-muted mb-0">0</p>
                    </div>
                    <div class="col-lg-2">
                      <a class="resume-link">Raise</a>
                    </div>
                  </div>
                  <hr class="line" />
                  <div class="row validate-row">
                    <div class="col-lg-5">
                      <p class="mb-0">Resume</p>
                    </div>
                    <div class="col-lg-5">
                      <a class="resume-link sp" href="#">View Resume</a>
                    </div>
                    <div class="col-lg-2">
                      <a class="resume-link">Raise</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button class="btn btn-primary approve">Approve</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
