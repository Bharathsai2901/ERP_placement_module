import React, {useState} from "react";
import "../styles/sendnotify.css";
import MyVerticallyCenteredModal from "./modal"
import Button from "react-bootstrap/Button";
// import fetch from 'node-fetch';

export default function App(){
    const [modalShow, setModalShow] = React.useState(false);
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
        const options = { 
            method:"POST", 
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(Email)
        }
        
        try{
            const res = await fetch("/send", options)
            console.log(res.status)
            setModalShow(true)
        }
        catch(err){
            console.log(err.message)
        }
    }
return(
<div>
   <div className="wrapper">
      <div className="wrap">
         <div className="logo fadeIn animated"><img className="Logo" src="https://hdstockimages.com/wp-content/plugins/image-downloader-custom/temp/HDStockImages_premium_RITSC6.jpg"  /></div>
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
            <div className="field mb-4">
               <textarea name="message" id="message" className="input" placeholder="Type message here.." onChange = {handleNoteInput}></textarea><br />
            </div>
            <div className="text-right mb-5">
                    {/* <a href="" className="btn btn-success">Add</a> */}

                    <Button className="btn btn-mail btn-success" onClick={sendNotify}>
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
);
}