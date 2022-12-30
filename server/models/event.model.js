import mongoose from "mongoose"

const EventSchema = new mongoose.Schema(
    {
        title :{
            type: String,
            required: true,
            unique: true
        },
        desc : {
            type: String,
            required: true
        },
        timing : {
            type: String,
            required: true
        },
        players_limit : {
            type: Number,
            required:true
        },
        picture: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        userid: {
            type:String,
            required: true
        }
    },
    {timestamps : true, versionKey: false}
)

const eventModel = mongoose.model("posts", EventSchema)

export default eventModel;
