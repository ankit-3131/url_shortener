const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

async function connectDB(){
    try{
        await mongoose.connect(process.env.URI)
        console.log('Connected to MongoDB')
    }
    catch(err){
        console.log("database error", err)
    }
}
module.exports = connectDB