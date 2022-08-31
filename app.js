
const dotenv = require("dotenv")


dotenv.config({path:"./config.env"})

const express = require("express")
const app = express()

const DB = process.env.DATABASE 
const PATH = process.env.CONNECTIONPATH 

var cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(require("./routerRoute/auth"))


require("./db/connection")

app.listen(PATH, ()=>{
  console.log("Server Started!")
}) 

app.get("/", (request, response)=>{
  setTimeout(()=>{
    response.send("Hello World!")
  }, 5000)
})

  


