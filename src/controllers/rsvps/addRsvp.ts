import { Request, Response } from 'express';
import * as rsvpsService from '@services/rsvps/addRsvp'; // Adjust import path based on your project structure

/**
 * Controller function to get songs by playlist ID from favorites table
 * @param req Request object containing playlist ID in params
 * @param res Response object to send back the songs or error message
 */
export const addRsvp = async (req: Request, res: Response) => {
  const { id, e_id } = req.body; // Assuming userId and eventId are sent in the request body

  const rsvp = await rsvpsService.addRsvp(req.body);
  res.status(201).json(rsvp);
};
// controllers/rsvp/createRsvp.ts
