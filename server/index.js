import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import mongoose from "mongoose"

const app = express();
app.use(express.json()); 
app.use(cors());

app.use("/", (req, res) => {
    res.send("Welcome to sports channel! ")
})

app.listen(3050, ()=>{
    try{
        console.log("Server running on 3050");
    }
    catch(e){
        console.log(e)
    }
})