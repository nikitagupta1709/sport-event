import eventModel from "../models/event.model.js";

export const createEvent = async(req, res) =>{
    try {
        let event = req.body;
        let { title, desc, players_limit, category, timing, picture, userId } = event;

        let eventExist =  await eventModel.findOneAndRemove({title});

        if(eventExist){
            return res.status(400).send({
                error: true,
                message: 'Event already exists with this title'
            })
        }
        else{
            let newEvent = await eventModel.create({
                title, desc, players_limit, category, timing, picture, userId
            });

            newEvent = newEvent.toJSON();

            return res.send({
                error: false,
                message: "Event successfully created"
            })
        }

    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
}