import { Request, Response } from 'express';
import * as eventService from '@services/event/getAllEvent';

/**
 * Retrieves all users.
 * @param _req - The request object.
 * @param res - The response object.
 * @returns A Promise that resolves to the list of users.
 */
export const getAllEvent = async (_req: Request, res: Response) => {
  const events = await eventService.getAllEvent();
  res.status(200).send(events);
};
