import React, {useState} from "react";
import "../styles/email-style.css";

export default function App(){
    const [Email, setEmail] = useState({
        email1:"",
        email2:"",
        subject:"",
        message:""
    });

    const handleNoteInput = (event) => {
        let name, value 
        name = event.target.name
        value = event.target.value 
        setEmail({...Email, [name]:value})
    }

    const sendNotify = async (event)=>{
        event.preventDefault();
        
        try{
            const options = { 
                method:"post", 
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(Email)
            }
            const res = await fetch("/send", options)
            console.log(res.status)
        }
        catch(err){
            console.log(err.message)
        }
    }
return(
<div>
   <div className="wrapper">
      <div className="wrap">
         <div className="logo fadeIn animated"><img className="Logo" src="https://iittp.plumerp.co.in/prod/iittirupati/res/images/iittirupati-logo.png"  /></div>
         <div className="welcome "> Email Integration</div>
         <form method="get" >
            <div className="field">
               <input type="email" name="email1" id="email" placeholder="First Email: " required className="input" value = {Email.email1} onChange = {handleNoteInput}/>
            </div>
            <div className="field">
               <input type="email" name="email2" id="email2" placeholder="Second Email: " className="input" value = {Email.email2}  onChange = {handleNoteInput}/>
            </div>
            <div className="field">
               <input type="text" name="subject" placeholder="Type subject here" className="input" onChange = {handleNoteInput}/>
            </div>
            <div className="field">
               <textarea name="message" id="message" className="input" placeholder="Type message here.." onChange = {handleNoteInput}></textarea><br />
            </div>
            <div className="field">
               <button className = "btn" onClick = {sendNotify}>Send</button>
            </div>
            </form>
      </div>
   </div>
</div>
);
}