import { Router } from 'express';
import { rsvpsController } from '@controllers/index';

import { addRsvp, getRsvp } from '@validations/rsvps';

const rsvpsRouter = Router();

// // GET all songs
// songRouter.get('/', songController.getAllSongs);

// GET song by ID
// songRouter.get('/:id', songController.getSongById);
// songRouter.get('/', songController.getAllSong);
// songRouter.post('/new', songController.createSong);
// songRouter.delete('/delete/:id', songController.deleteSongById);
// songRouter.put('/update/:id', songController.updateSongById);
rsvpsRouter.get('get/:id', getRsvp, rsvpsController.getRsvp);
// favouritesRouter.post('/addsong', addSong, favouritesController.addSong);
// // POST create a new song
// songRouter.post('/', songController.createSong);
rsvpsRouter.post('/:id/rsvp', addRsvp, rsvpsController.addRsvp);

export { rsvpsRouter };
