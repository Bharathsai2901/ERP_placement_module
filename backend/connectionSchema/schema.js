
const mongoose = require("mongoose")
const jwt =  require('jsonwebtoken')
const userSchema = new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  Email:{
    type:String, 
    required:true
  },
  PhoneNo:{
    type:Number, 
    required:true
  },
  Profession:{
    type:String
  },
  password:{
    type:String, 
    required:true
  },
  cPassword:{
    type:String, 
    required:true
  }, 
  tokens:[
    {
      token:{
        type:String, 
        require:true
      }
    }
  ]
})
 
userSchema.methods.authenticate = async function(){
  try{
    let token = jwt.sign({_id:this._id}, process.env.SECRETKEY)
    this.tokens = this.tokens.concat({token:token})
    await this.save()
    return token 
  }
  catch(error){
    console.log(error.message)
  }
}

const User = mongoose.model('students', userSchema) 


module.exports = User

