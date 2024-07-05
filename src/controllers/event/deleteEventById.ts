import { Request, Response } from 'express';
import * as eventService from '@services/event/deleteEventById'; // Adjust import path based on your project structure

/**
 * Controller to handle the deletion of a song by ID
 * @param req Express request object with song ID in params
 * @param res Express response object
 */
export const deleteEventById = async (req: Request, res: Response) => {
  const { e_id } = req.params;

  const deleted = await eventService.deleteEventById(e_id);

  if (!deleted) {
    return res.status(404).send({ message: 'Event not found' });
  }

  res.status(200).send({ message: 'Event deleted' });
};
