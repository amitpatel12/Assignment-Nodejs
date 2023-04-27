import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const DB_URL = "mongodb+srv://amitpatel12:amitpatel12@cluster0.szzrgme.mongodb.net/sample_data?retryWrites=true&w=majority"


mongoose.connect(DB_URL, {useUnifiedTopology: true})
.then(()=> {
    console.log("database connection established")
})
.catch(err => console.error("something went wrong",err))

