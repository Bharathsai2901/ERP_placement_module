
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  Name:{
    type:String, 
    require:true
  }, 
  Email:{
    type:String, 
    require:true
  },
  companyName:{
    type:String, 
    require:true
  },
  Jobtitle:{
    type:String, 
    require:true
  },
  availability:{
    type:String, 
    require:true
  },
  internships:{
    type:String, 
    require:true
  }, 
  workDone:{
    type:String, 
    require:true
  }, 
  studentResume: {
    type:Array, 
    require:true
  }, 
  applied:{
    type:Boolean, 
    default:false
  }
})
 
const studentDetails = mongoose.model("student_resume", userSchema)

module.exports = studentDetails
