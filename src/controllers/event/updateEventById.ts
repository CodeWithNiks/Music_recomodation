import { Request, Response } from 'express';
import * as eventService from '@services/event/updateEventById'; // Adjust import path based on your project structure

/**
 * Controller to handle the update of a song
 * @param req Express request object with song ID in params and updated song details in body
 * @param res Express response object
 */
export const updateEventById = async (req: Request, res: Response) => {
  const { e_id } = req.params;
  const updatedEventData = req.body;

  const event = await eventService.updateEventById(e_id, updatedEventData);

  res.status(200).send(event);
};
