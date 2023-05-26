const mongoose=require("mongoose")

require('dotenv').config()

let connected=mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.rlwkcec.mongodb.net/chatApp`)

if(connected){
    console.log("Connection with database established")
}else{
    console.log("Connection with database cannot be established")
}