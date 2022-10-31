
const mongoose = require("mongoose")


const jobSchema = new mongoose.Schema({
  companyName:{
    type:String, 
    require:true
  },
  Jobtitle:{
    type:String, 
    require:true
  }, 
  Salary:{
    type:Number, 
    require:true
  },
  Location:{
    type:String, 
    require:true
  },
  Type:{
    type:String, 
    require:true
  }, 
  Openings:{
    type:Number,
    require:true
  },
  Applybefore:{
    type:Date,
    require:true
  },
  Jobdescription:{
    type:String, 
    require:true
  },
  Skillsrequired:{
    type:String, 
    require:true
  },
  Whocanapply:{
    type:String, 
    require:true
  }, 
  companyLogo:{
    type:Array,
    require:true
  }
})
 

const studentDetails = mongoose.model("jobDetails", jobSchema)


module.exports = studentDetails
