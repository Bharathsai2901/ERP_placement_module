
const mongoose = require("mongoose")

const DB = process.env.DATABASE 

const options = {
  useNewUrlParser:true, 
  useUnifiedTopology:true
}
mongoose.connect(DB, options)

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once('open', function(){
  console.log("Connection Successful")
})

mongoose.createConnection(COMPANYDATABASE, options)
