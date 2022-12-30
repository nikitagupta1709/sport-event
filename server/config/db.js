import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

mongoose.set('strictQuery', false);

const mongo_url = process.env.MONGO_URL;

const connection = async ()=>{
    await mongoose.connect(mongo_url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Connection established")
}

export default connection;