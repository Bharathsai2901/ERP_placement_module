import React, { useEffect, useState } from 'react'
import "../styles/sendnotify"

export default function sendnotify(){
<div>
   <div className="wrapper">
      <div className="wrap">
         <div className="logo fadeIn animated"><img className="Logo" src="https://iittp.plumerp.co.in/prod/iittirupati/res/images/iittirupati-logo.png"  /></div>
         <div className="welcome "> Email Integration</div>
         <form action="send" method="get" >
            <div className="field">
               <input type="email" name="email1" id="email" placeholder="First Email: " required className="input" />
            </div>
            <div className="field">
               <input type="email" name="email2" id="email2" placeholder="Second Email: " required className="input" />
            </div>
            <div className="field">
               <input type="text" name="subject" placeholder="Type subject here" required className="input" />
            </div>
            <div className="field">
               <textarea name="message" id="message" className="input" placeholder="Type message here.."></textarea><br />
            </div>
            <div className="field">
               <button className = "btn">Send</button>
            </div>
            </form>
      </div>
   </div>
</div>

}
