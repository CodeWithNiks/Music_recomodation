import { Request, Response } from 'express';
import * as eventService from '@services/event/getEventById'; // Adjust import path based on your project structure

/**
 * Controller to handle the retrieval of a song by ID
 * @param req Express request object with song ID in params
 * @param res Express response object
 */
export const getEventById = async (req: Request, res: Response) => {
  const { e_id } = req.params;
  const event = await eventService.getEventById(e_id);
  // const reqBody: ISong = req.body;
  // const song = await songService.getSongById(reqBody.id);

  if (!event) {
    return res.status(404).send({ message: 'Event not found' });
  }

  res.status(200).send(event);
};
