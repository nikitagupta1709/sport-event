import mongoose from "mongoose"

const EventSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:true,
            unique:true,
        },
        desc:{
            type:String,
            required:true
        },
        startTime:{
            type:String,
            required:true
        },
        endTime:{
            type:String,
            required:true
        },
        players_limit:{
            type:Number,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        },
        picture:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        userId:{
            type:String,
            required:true
        },
        players : {
            type: Array,
            default: []
        }
    },
    {timestamps : true, versionKey: false}
)

const eventModel = mongoose.model("event", EventSchema)

export default eventModel;
