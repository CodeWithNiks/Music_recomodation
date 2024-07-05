import { Request, Response } from 'express';
import * as eventService from '@services/event/createEvent';

/**
 * Controller to handle the creation of a new song
 * @param req Express request object
 * @param res Express response object
 */
export const createEvent = async (req: Request, res: Response) => {
  const event = await eventService.createEvent(req.body);
  res.status(201).send(event);
};
