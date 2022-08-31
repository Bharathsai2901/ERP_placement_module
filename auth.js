
const { request } = require("express")
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")


require("../db/connection")
const User = require("../connectionSchema/schema")


router.get("/", (request, response)=>{
  response.send("This is response from router")
})
router.post("/register", async (req, res)=>{
  const {Name, Email, PhoneNo, password, cPassword} = req.body
  const hashPassword = await bcrypt.hash(password, 10)
  if(!Name|| !Email|| !PhoneNo|| !password|| !cPassword){
    res.send("Enter Valid Credentials")
  } 
  try{
  const isUserExist = await User.findOne({Email:Email})
  if(!isUserExist){
    const newUser = new User({Name, Email, PhoneNo, password:hashPassword, cPassword:hashPassword})
    await newUser.save()
    res.send("Created Succesfully")
  }
  else{
    res.status(401).send("Already Exists")
  }
}
catch(error){
  console.log(error.message)
}
  
  
})

router.post("/login", async (req, res)=>{
  const {Email, password} = req.body
  try{
    const getUSer = await User.findOne({Email})
    if(!getUSer){
        res.status(401).json({message:"Create USer first"})
    }
    else{
      const checkPass = await bcrypt.compare(password, getUSer.password)
      if(checkPass){
        res.json({message:"Login Succesfull"}).status(201)
      }
      else{
        res.json({message:"Enter Valid Credentials"})
      }
    }
  }
  catch(error){
    console.log(error.message)
  }
  
  
})

module.exports = router
