import express from 'express';
import { createEvent, joinedEvent } from '../controllers/event.controller.js';

const eventRouter = express.Router();

eventRouter.post('/create', createEvent);

eventRouter.get('/');

eventRouter.get('/:_id');

eventRouter.post("/requested/:_id", joinedEvent)

export default eventRouter;
