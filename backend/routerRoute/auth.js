const { request } = require("express")
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer");

require("../db/connection")
const User = require("../connectionSchema/schema")
const Company = require("../connectionSchema/companySchema")
const JobDetails = require("../connectionSchema/jobDetails")
const CompanyLogin = require("../connectionSchema/companyLogin")

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
  const {_id} = req.query
  
  try{
    if(!_id){
      const getJobDetails = await JobDetails.find()
      if(getJobDetails.length === 0){
        res.status(500).json({'message':"server error!"})
      }
      else{
        res.status(200).json(getJobDetails)
      }
    }
    else{
      try{
      const getUser = await JobDetails.findOne({_id})
      if(!getUser){
        res.status(500).json({'message':"User Not found"})
      }
      else{
        res.status(200).json(getUser)
      }
    }
    catch(error){
      console.log(error.message)
    }
    }
}
catch(err){
  console.log(err.message)
}
})

router.post("/uploadResume", authUserLogin, async (req, res)=>{
  const {Name, Email} = req.rootUser

  const {companyName, Jobtitle, availability, internships, workDone, studentResume} = req.body

  if(!availability || !internships ||!workDone ||!studentResume || !Jobtitle){
    res.status(422).json({"message":"Fill the details!!"})
  }
  else{
    const isPresent = await Company.findOne({Name, Email, companyName, Jobtitle})
    if(!isPresent){
      const newStudent = new Company({Name, Email, companyName, Jobtitle, availability, internships, workDone, studentResume})
      await newStudent.save()
    }
    else{
      await Company.updateOne({availability, internships, workDone, studentResume})
    }
    //res.status(201).json({"Message":"Updated Succesfully!!"})
    //await Company.updateOne({applied:true})
    const mail = nodemailer.createTransport({
      // host: 'mail.traversymedia.com',
      // service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "cs20b055@iittp.ac.in",
        pass: "PBS@2003",
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    var mailOptions = {
      from: "cs20b055@iittp.ac.in",

      //to: "ee20b023@iittp.ac.in,bharatsaipadala@gmail.com",
     // to: "bharatsaipadala@gmail.com",
      to: "cs20b010@iittp.ac.in, cs20b014@iittp.ac.in, cs20b008@iittp.ac.in, me20b037@iittp.ac.in, cs20b055@iittp.ac.in, bharatsaipadala@gmail.com",
      subject: "We have recieved your application. Thankyou for applying!!",
      html: `<h3>Thank you for applying to the SDE position at Amazon.</h3>

      I’d like to inform you that we received your Application. 
      Our hiring team is currently reviewing all applications and we are planning to schedule interviews.
       If you are among qualified candidates, you will receive a call/email from our one of our recruiters to schedule an interview. 
       In any case, we will keep you posted on the status of your application.
       
       Your responses are here for your reference.
            <h4>Company name : Amazon<br>
            Availability : ${availability} <br>
            Previous Internships : <a>${internships}</a><br>
            Previous work : ${workDone}</h4><br>
            
            Thank you, again, for taking the time to apply to this role.

<h4>Best regards,<br>
CDC IIT</h4>`,
    };

    mail.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        res.send("Mail has been sent");
      }
    });
  }
  
})

router.post("/uploadDetails", async (req, res)=>{
  const {Jobtitle, Salary, Location, Type,Openings,Applybefore,Jobdescription,Skillsrequired,Whocanapply, companyLogo} = req.body
  const companyName = req.cookies.companyName

  try{
  if(!Jobtitle || !Salary || !Location || !Type|| !Openings|| !Applybefore|| !Jobdescription|| !Skillsrequired|| !Whocanapply || !companyLogo){
    res.status(422).json({"status":"Fill every Details"})
  }
  else{
    const jobDetails = new JobDetails({companyName, Jobtitle, Salary, Location, Type,Openings,Applybefore,Jobdescription,Skillsrequired,Whocanapply, companyLogo})
    await jobDetails.save()
    console.log(jobDetails.timeElapsed)
    //res.status(201).json({"status":"User Created Successfully!"})
    const mail = nodemailer.createTransport({
      // host: 'mail.traversymedia.com',
      // service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "cs20b055@iittp.ac.in",
        pass: "PBS@2003",
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
      // "secure": config.email.secure,
      // "ignoreTLS": true,
    });

    var mailOptions = {
      from: "cs20b055@iittp.ac.in",
      to: "cs20b010@iittp.ac.in, cs20b014@iittp.ac.in, cs20b008@iittp.ac.in, me20b037@iittp.ac.in, cs20b055@iittp.ac.in, bharatsaipadala@gmail.com",
      //to: "saideepthi.p21@iiits.in,bharatsaipadala@gmail.com",
      subject:
        "Amazon posted a new Job.You can register for the same",
      html: `
      You are eligible for the Event - "Amazon - SDE" - being organised for an Opportunity with "Amazon".
      Please click the button or the link mentioned below to View the Details & Register for the same.	

      <h4>JobTitle : ${Jobtitle};<br>
      Salary : ${Salary} LPA;<br>
      Location : ${Location};<br>
      ApplyBefore : ${Applybefore};</h4>
          
      <h3>for further details visit https://iittp.calyxpod.com/d/mLpMwC/opportunities/-Nbz-j </h3>
        
      Important - You will be receiving the Placement Event email notifications only for the first few events. Please Download & Install the Mobile Application to receive the Mobile Notifications throughout the year.
  
  
    
      <h4>Regards,<br>
      Career Development Centre<br>
      IIT Tirupati</h4>`,
    };

    mail.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        res.send("Job notification has been sent");
      }
    });
  }
}
catch(err){
  console.log(err.message)
}
})

router.get("/getStudents", async (req, res)=>{
  const companyName = req.cookies.companyName
  const appliedStudent = await Company.find({companyName})
  if(!companyName){
    res.status(500).json({message:"try to login again!"})
  }
  else{
    if(!appliedStudent){
      res.status(200).json({message:"No student applied yet!"})
    }
    else{
      res.status(201).json(appliedStudent)
    }
  }
})

router.get("/getAppliedDetails/:companyName", async (req, res)=>{
  const {companyName} = req.params
  try{
    const allStudentDetails = await Company.find({companyName})
    if(!allStudentDetails){
      res.status(401).json({message:"No Students applied till now"})
    }
    else{
      
      res.status(200).json(allStudentDetails)
    }
  }
  catch(e){
    console.log(e.message)
  }
})

router.get("/appliedStudent/:companyName/:Jobtitle", authUserLogin, async(req, res)=>{
  const {Email} = req.rootUser
  const {companyName, Jobtitle} = req.params
  try{
    const finalRes = await Company.findOne({Email, companyName, Jobtitle})
    res.status(200).json(finalRes)
  } 
  catch(e){
    console.log(e.message)
  }
})

router.get("/studentDetails/:Email", async(req, res)=>{
  const {Email} = req.params
  try{
    const dataBack = await User.findOne({Email})
    if(!dataBack){
      res.status(501).json({message:"Server didnt responded"})
    }
    else{
      res.status(200).json(dataBack)

    }
  }
  catch(e){
    console.log(e.message)
  }
})
router.get("/getResume/:id", async (req, res)=>{
  const {id} = req.params 
  let appliedResume = await Company.findOne({_id:id})

  res.status(200).json({appliedResume})
})

router.get("/studentsProfile/:mail", async (req, res)=>{
  const {mail} = req.params
  const appliedStudent = await User.findOne({Email:mail})
  if(!appliedStudent){
    res.status(400).json({message:"User didnt applied for company"})
  }
  else{
    res.status(200).json(appliedStudent)
  }
})

router.get("/", (request, response)=>{
  response.send("This is response from router")
})

router.get("/about", authUserLogin, async (req, res)=>{
  console.log("This is about me page")

})

router.post("/verifyCompany", async(req, res)=>{
  const {email, password} = req.body
  try{
    if(!email || !password){
      res.status(400).json({"message":"Fill the details completely!!"})
    }
    else{
      const foundUser = await CompanyLogin.findOne({email})
      if(!foundUser){
        res.status(400).json({"message":"Unauthorized User!!"})
      }
      else{
        const checkUser = await bcrypt.compare(password, foundUser.password)
        if(checkUser){
          res.cookie("companyName", foundUser.name, {
            expires:new Date(Date.now() + 86400000),
            httpOnly:true
          })
          res.status(201).json({message:"Login Succesfull"})
        }
        else{
          res.status(400).json({message:"Enter Valid Credentials"})
        }
      }
    }
  }
  catch(err){
    console.log(err.message)
  }
})

router.delete("/removeApp/:Jobtitle", authUserLogin, async (req, res)=>{
  const {Email} = req.rootUser
  const {Jobtitle} = req.params 

  try{
    await Company.deleteOne({Email, Jobtitle})
    res.status(200).json({message:"Succesfully removed User!"})
  }
  catch(e){
    console.log(e.message)
  }
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

router.post("/register", async (req, res)=>{
  const {Name, Email, PhoneNo, Profession, password, cPassword} = req.body 
  if(!Name || !Email ||!PhoneNo ||!Profession ||!password ||!cPassword){
    res.status(400).json({message:"Please fill the details"})
  }
  else{
    const bcryptPass = await bcrypt.hash(password, 10)
    const newUser = new User({Name, Email, PhoneNo, Profession, password:bcryptPass, cPassword:bcryptPass})
    await newUser.save()
    res.status(201).json({message:"User Created Successfully!"})
  }
})

router.post("/addCompany", async (req, res)=>{
  const {email, password, name} = req.body
  if(!email||!password||!name){
    res.status(400).json({message:"Enter details Completely!!"})
  }
  else{
    const hasedPass = await bcrypt.hash(password, 10)
    const newCompany = new CompanyLogin({name, email, password:hasedPass})
    await newCompany.save()
    res.status(201).json({message:"Created Succesfully!"})
  }
})

module.exports = router
