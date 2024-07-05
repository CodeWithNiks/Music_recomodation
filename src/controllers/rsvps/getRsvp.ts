import { Request, Response } from 'express';
import * as rsvpsService from '@services/rsvps/getRsvp'; // Adjust import path based on your project structure

/**
 * Controller function to get songs by playlist ID from favorites table
 * @param req Request object containing playlist ID in params
 * @param res Response object to send back the songs or error message
 */
export const getRsvp = async (req: Request, res: Response) => {
  const { id } = req.params;

  const rsvp = await rsvpsService.getRsvp(id);

  res.status(200).json(rsvp);
};

// import { Request, Response } from 'express';
// import * as favoriteService from '@services/favourites/getSongByPlaylist';
// import { SongSchema } from '@modules/song/schema';

// /**
//  * Retrieves all songs by playlist ID.
//  * @param req - The request object.
//  * @param res - The response object.
//  * @returns A Promise that resolves to the list of songs.
//  */
// export const getSongByPlaylist = async (req: Request, res: Response) => {
//   const { p_id } = req.params;
//   const favorites = await favoriteService.getSongByPlaylist(Number(p_id));
//   res.status(200).send(favorites);
// };
// import { Request, Response } from 'express';
// import * as favoriteService from '@services/favourites/getSongByPlaylist'; // Adjust import path based on your project structure

// /**
//  * Controller to handle the retrieval of a song by ID
//  * @param req Express request object with song ID in params
//  * @param res Express response object
//  */
// export const getSongByPlaylist = async (req: Request, res: Response) => {
//   const { p_id } = req.params;
//   const favorite = await favoriteService.getSongByPlaylist(p_id);

//   if (!favorite) {
//     return res.status(404).send({ message: 'Song not found' });
//   }

//   res.status(200).send(favorite);
// };
// import { Request, Response } from 'express';
// import * as favoriteService from '@services/favourites/getSongByPlaylist'; // Adjust import path based on your project structure

// /**
//  * Controller to handle the retrieval of songs by playlist ID
//  * @param req Express request object with playlist ID in params
//  * @param res Express response object
//  */
// export const getSongByPlaylist = async (req: Request, res: Response) => {
//   const { p_id } = req.params;
//   const favorites = await favoriteService.getSongByPlaylist(p_id);

//   if (!favorites || favorites.length === 0) {
//     return res.status(404).send({ message: 'Songs not found in the playlist' });
//   }

//   res.status(200).send(favorites);
// };
// import { Request, Response } from 'express';
// import * as favoriteService from '@services/favourites/getSongByPlaylist'; // Adjust import path based on your project structure

// /**
//  * Controller to handle the retrieval of songs by playlist ID
//  * @param req Express request object with playlist ID in params
//  * @param res Express response object
//  */
// export const getSongByPlaylist = async (req: Request, res: Response) => {
//   const { p_id } = req.params;
//   const songs = await favoriteService.getSongByPlaylist(p_id);

//   if (!songs || songs.length === 0) {
//     return res.status(404).send({ message: 'Songs not found in the playlist' });
//   }

//   res.status(200).send(songs);
// };
