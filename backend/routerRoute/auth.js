
const { request } = require("express")
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

require("../db/connection")
const User = require("../connectionSchema/schema")
const Company = require("../connectionSchema/companySchema")
const JobDetails = require("../connectionSchema/jobDetails")
 
const authUserLogin = async (req, res, next)=>{
  
  try{
    const token = req.cookies.jwtoken 
    const verifyUser = jwt.verify(token, process.env.SECRETKEY)
    
    const rootUser = await User.findOne({_id:verifyUser._id})
    req.rootUser = rootUser
  }
  catch(err){
    res.status(401).json({message:"Unauthorized Entry!!"})
    console.log(err.message)
  }
  next()
}
router.post("/uploadDetails", async (req, res)=>{
  const {Jobtitle, Salary, Location, Type,Openings,Applybefore,Jobdescription,Skillsrequired,Whocanapply} = req.body
  try{
  if(!Jobtitle || !Salary || !Location || !Type|| !Openings|| !Applybefore|| !Jobdescription|| !Skillsrequired|| !Whocanapply){
    res.status(422).json({"status":"Fill every Details"})
  }
  else{
    const jobDetails = new JobDetails({Jobtitle, Salary, Location, Type,Openings,Applybefore,Jobdescription,Skillsrequired,Whocanapply})

    await jobDetails.save()
    res.status(201).json({"status":"User Created Successfully!"})
  }
}
catch(err){
  console.log(err.message)
}

})


router.get("/", (request, response)=>{
  response.send("This is response from router")
})

router.get("/about", authUserLogin, async (req, res)=>{
  console.log("This is about me page")

})

router.post("/login", async (req, res)=>{
  const {Email, password} = req.body
  try{
    if(!Email || ! password){
      res.status(400).json({error:"Enter Valid Credentials"})
    }
    if(Email!=null && password!=null){
    const getUSer = await User.findOne({Email})
    if(!getUSer){
        res.status(400).json({message:"User has to register first!"})
    }
    else{
      const checkPass = await bcrypt.compare(password, getUSer.password)
      let token = await getUSer.authenticate()
      console.log(token)
        res.cookie('jwtoken', token, {
          expires:new Date(Date.now() + 86400000),
          httpOnly:true
        })
      if(checkPass){
        
        res.status(201).json({message:"Login Succesfull"})
      }
      else{
        res.status(400).json({message:"Enter Valid Credentials"})
      }
    }
  }
  }
  catch(error){
    console.log(error.message)
  }
  
  
})

module.exports = router
