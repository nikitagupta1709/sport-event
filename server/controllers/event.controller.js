import eventModel from "../models/event.model.js";
import userModel from "../models/user.model.js";

// Create a new event
export const createEvent = async(req, res) =>{
    try {
        let event = req.body;
        let {title,desc,startTime,endTime,address,location,players_limit,category,picture,userId} = event;

        let eventExist = await eventModel.findOne({title});
        
        if(eventExist){
            return res.status(200).send({
                error: true,
                message: 'Event already exists with this title!'
            })
        } else{
            let newEvent = await eventModel.create({
                title,desc,startTime,endTime,address,location,players_limit,category,picture,userId
            });
            newEvent = newEvent.toJSON();
            return res.send({
                error:false,
                message: 'Event successfully created.'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
}

// get all events
export const getAllEvents = async (req, res) => {
    try {
        let events = await eventModel.find();
        // console.log(events, "events");
        res.send({
            error:false,
            events: events
        })
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
}

// get event 
export const getEvent = async (req, res) => {
    try {
        let eventId =  req.params;
        // console.log(eventId, "eventId");
        let event = await eventModel.findOne({_id: eventId._id})
        res.send({
            error: false,
            event:event
        })
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
}

// requested Join an event
export const joinedEvent  = async (req,res) => {
    try {
        let eventId = req.params;
        let userId = req.body; 

        let event = await eventModel.findById(eventId._id);
        let user = await userModel.findById(userId.userId);

        let existEventForUser = user.events.find((event)=>{
            return event.eventId.toString() === eventId._id;
        })

        if(existEventForUser){
            return res.send({
                error: true,
                message:"You have already requested for this event!"
            })
        } else{
            event.players.push({
                userId : user._id,
                name:user.name,
                email:user.email,
                value:"requested"
            })
            user.events.push({
                eventId : event._id,
                title:event.title,
                desc: event.desc,
                startTime: event.startTime,
                endTime: event.endTime,
                address:event.address,
                lcoation:event.location,
                players_limit: event.players_limit,
                picture: event.picture,
                category: event.category,
                organizer: event.userId,
                value:"requested"
            })
            await eventModel.findByIdAndUpdate(eventId._id,{
                players:event.players
            })
        }

        await userModel.findByIdAndUpdate(userId.userId,{
            events:user.events
        })
        res.send({
            error:false,
            message:"You have requested to join this event!"
        })
    } catch (error) {
        res.send({
            error: error
        })
    }
}

// accepted Join an event
export const acceptedEvent  = async (req,res) => {
    try {
        let eventId = req.params;
        let userId = req.body;

        let event = await eventModel.findOne({_id:eventId._id});
        let user = await userModel.findOne({_id:userId.userId});

        let player = event.players.find((player)=>{
            return player.userId.toString() === userId.userId;
        });

        player.value = "accepted"

        await eventModel.findByIdAndUpdate(eventId._id,{
            players:event.players
        })

        let userEvent = user.events.find((event)=>{
            return event.eventId.toString() === eventId._id;
        })

        userEvent.value = "accepted"
        
        await userModel.findByIdAndUpdate(userId.userId,{
            events:user.events
        })

        res.send({
            error:false,
            message:"User has been accepted for this event!"
        })
    } catch (error) {
       return res.send({
            error: error
        })
    }
}

// rejected
export const rejectedEvent  = async (req,res) => {
    try {
        let eventId = req.params;
        let userId = req.body;
    
        let event = await eventModel.findOne({_id:eventId._id});
        let user = await userModel.findOne({_id:userId.userId});
    
        let player = event.players.find((player)=>{
            return player.userId.toString() === userId.userId;
        });
    
        player.value = "rejected"
    
        await eventModel.findByIdAndUpdate(eventId._id,{
            players:event.players
        })
    
        let userEvent = user.events.find((event)=>{
            return event.eventId.toString() === eventId._id;
        })
    
        userEvent.value = "rejected"
        
        await userModel.findByIdAndUpdate(userId.userId,{
            events:user.events
        })
    
        res.send({
            error:false,
            message:"User has been rejected for this event!"
        })
    } catch (error) {
        res.send({
            error: error
        })
    }
}
