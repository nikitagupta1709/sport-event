import express from 'express';
import { createEvent, getAllEvents, getEvent, rejectedEvent, acceptedEvent, joinedEvent } from '../controllers/event.controller.js';

const eventRouter = express.Router();

eventRouter.post('/create', createEvent);

eventRouter.get('/', getAllEvents);

eventRouter.get('/:_id', getEvent);

eventRouter.post("/requested/:_id", joinedEvent)

eventRouter.post("/accepted/:_id", acceptedEvent)

eventRouter.post("/rejected/:_id", rejectedEvent)

export default eventRouter;
