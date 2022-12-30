import express from 'express';
import { createEvent } from '../controllers/event.controller.js';

const eventRouter = express.Router();

eventRouter.post('/create', createEvent);

eventRouter.get('/');

eventRouter.get('/:_id');

export default eventRouter;
