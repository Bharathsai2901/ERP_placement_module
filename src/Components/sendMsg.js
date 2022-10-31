import React, {useState} from 'react'

const SendMsg = ()=>{

  const [appliedInput, setAppliedInput] = useState({
    number:"", 
    message:""
  })

  const handleInput = (event)=>{
    let name, value
    name = event.target.name 
    value = event.target.value 
    setAppliedInput({...appliedInput, [name]:value})
  }
  
  const sendNotification = (event)=>{
    event.preventDefault()
    console.log(appliedInput)
    let handleAsync = async function(){
      let options = {
        method:"post", 
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(appliedInput)
      }
      const res = await fetch("/SendMessage", options)
      const actualRes = await res.json()
      console.log(actualRes)
    }
    handleAsync()
  }

  return(
    <form action="/SendMessage" method="post">
        <div class="form-group">
            <label for="number">Enter Mobile Number</label>
            <input type="text" id="number" name="number" onChange={handleInput}/>
        </div>
        <div class="form-group">
            <label for="message">Enter the Message</label>
            <input type="text" name="message" id="message" onChange={handleInput}/>
        </div>
        <button onClick = {sendNotification} type = "submit">Send Message</button>
    </form>
  )
}

export default SendMsg