import "../styles/sendnotify.css"
import React from "react";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./modal"


export default function sendnotify(){
   const [modalShow, setModalShow] = React.useState(false);
   return(
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
               <div className="text-right field mb-5">
                    {/* <a href="" className="btn btn-success">Add</a> */}

                    <Button className="btn btn-success" onClick={() => setModalShow(true)}>
                    Add
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    text="Email sent successfully"
                    href="/sendnotify"
                />
                </div>
               </form>
         </div>
      </div>
   </div>
   )

}
