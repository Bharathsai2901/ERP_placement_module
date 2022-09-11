
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

dotenv.config({path:"./config.env"})

const express = require("express")
const app = express()

const DB = process.env.DATABASE 
const PATH = process.env.CONNECTIONPATH 

app.use(express.json())
app.use(cookieParser())
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

  


