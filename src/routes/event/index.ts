// songRouter.ts

// songRouter.ts

import { Router } from 'express';
import { eventController } from '@controllers/index';
import {
  createEvent,
  deleteEventById,
  getAllEvent,
  getEventById,
  updateEventById,
} from '@validations/event';

const eventRouter = Router();

// GET all songs
eventRouter.get('/', getAllEvent, eventController.getAllEvent);
eventRouter.get('/search/:e_id', getEventById, eventController.getEventById);
eventRouter.delete('/delete/:e_id', deleteEventById, eventController.deleteEventById);
eventRouter.post('/new', createEvent, eventController.createEvent);
eventRouter.put('/update/:e_id', updateEventById, eventController.updateEventById);

// GET song by ID

// // POST create a new song
// songRouter.post('/', songController.createSong);

export { eventRouter };
