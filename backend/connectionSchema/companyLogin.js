
const mongoose = require("mongoose")

const companyLoginSchema = new mongoose.Schema({
  name:{
    type:String, 
    require:true
  },
  email:{
    type:String, 
    require:true
  }, 
  password:{
    type:String, 
    require:true
  }
})

const logInDetails = mongoose.model("companylogin", companyLoginSchema)

module.exports = logInDetails