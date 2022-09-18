
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")




dotenv.config({path:"./config.env"})

const express = require("express")

const app = express()

const DB = process.env.DATABASE 
const PATH = process.env.CONNECTIONPATH 

const user = 'cs20b010@iittp.ac.in';
const pass = 'GroshanCS10*#';

app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(express.json({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(cookieParser())
app.use(cors())
app.use(require("./routerRoute/auth"))

 

require("./db/connection")

app.listen(PATH, ()=>{
  console.log("Server Started!")
}) 

app.post("/uploadResume", async (req, res)=>{
  console.log('FIles uploaded')
})

app.get("/", (request, response)=>{
  setTimeout(()=>{
    response.send("Hello World!")
  }, 5000)
})

app.post('/send', (req, res) => {
  // fetching data from form

  const {email1, email2, subject, message} = req.body


  const mail = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: user,
          pass: pass
      }

  });

  mail.sendMail({
      from: 'cs20b010@iittp.ac.in',
      to: [email1, email2],
      subject: subject,
      html: '<h1 >' + message + '</h1>'

  }, (err) => {
      if (err){
          console.log(err)
      };
      res.send('Mail has been sent')

  });
});
  


