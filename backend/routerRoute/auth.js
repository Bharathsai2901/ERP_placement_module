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

router.get("/uploadDetails", async (req, res)=>{
  try{
  const getJobDetails = await JobDetails.find()
  if(getJobDetails.length === 0){
    res.status(500).json({'message':"server error!"})
  }
  else{
    res.status(200).json(getJobDetails)
  }
}
catch(err){
  console.log(err.message)
}
})

router.post("/uploadResume", authUserLogin, async (req, res)=>{
  const {Name, Email} = req.rootUser
  
  const {availability, internships, workDone, studentResume} = req.body

  if(!availability || !internships ||!workDone ||!studentResume){
    res.status(422).json({"message":"Fill the details!!"})
  }
  else{
    const isPresent = await Company.findOne({Name, Email})
    if(!isPresent){
      const newStudent = new Company({Name, Email, availability, internships, workDone, studentResume})
      await newStudent.save()
    }
    else{
      await Company.updateOne({availability, internships, workDone, studentResume})
    }
    res.status(201).json({"Message":"Updated Succesfully!!"})
  }
  
})

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
