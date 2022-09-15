
const mongoose = require("mongoose")

const STUDENTDB = process.env.STUDENTDATABASE 
const COMPANYDATABASE = process.env.COMPANYDATABASE


const options = {
  useNewUrlParser:true, 
  useUnifiedTopology:true
}
mongoose.connect(STUDENTDB, options)

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once('open', function(){
  console.log("Connection Successful")
})

mongoose.createConnection(COMPANYDATABASE, options)