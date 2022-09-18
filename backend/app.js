const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")



dotenv.config({path:"./config.env"})

const express = require("express")

const app = express()

const DB = process.env.DATABASE 
const PATH = process.env.CONNECTIONPATH 
app.get('/send', (req, res) => {
  // fetching data from form

  let email1 = req.query.email1;
  let email2 = req.query.email2;
  let subject = req.query.subject;
  let message = req.query.message;


  const mail = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: credentials.user,
          pass: credentials.pass
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