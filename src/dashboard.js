import React from "react";

export default function Dash() {
  return (
    <div>
      <head>
        <title>DashBoard</title>
      </head>

      <div>
        <marquee
          width="40%"
          direction="up"
          height="30%"
          behavior="scroll"
          scrollamount="2.5"
        >
          Amazon new job notifications
          <br />
          Resumes should be submitted before August 30
          <br />
          Resumes verification to be completed before September 5
        </marquee>
      </div>
    </div>
  );
}