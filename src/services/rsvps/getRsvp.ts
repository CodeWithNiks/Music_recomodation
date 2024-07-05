import { rsvpSchema } from '@modules/rsvps/schema'; // Adjust import path based on your project structure
import { EventSchema } from '@modules/event/schema'; // Adjust import path based on your project structure
// Adjust import path based on your project structure

/**
 * Controller function to get songs by playlist ID from favorites table
 * @param req Request object containing playlist ID in params
 * @param res Response object to send back the songs or error message
 */
export const getRsvp = async (id: string) => {
  // Find all favorites for the given playlist ID
  const favourites = await rsvpSchema.findAll({
    where: { id },
  });

  // Extract song IDs from favourites
  const eventIds = favourites.map((favorite) => favorite.e_id);

  // Find songs corresponding to the extracted IDs
  const event = await EventSchema.findAll({
    where: { e_id: eventIds },
  });

  return event;
};
// Assuming 'song' is the alias for the joined SongSchema

// import { SongSchema } from '@modules/song/schema';
// import { FavouritesSchema } from '@modules/favourites/schema'; // Adjust import path based on your project structure

// /**
//  * Service function to get songs by playlist ID
//  * @param p_id Playlist ID
//  * @returns Promise resolving to an array of songs in the playlist
//  */
// export const getSongByPlaylist = async (p_id: string) => {
//   return FavouritesSchema.findAll({
//     where: { p_id },
//     include: [{ model: SongSchema }],
//   }).then((favourites) => favourites.map((favourite) => favourite.id));
// };
// import { SongSchema } from '@modules/song/schema';
// import { FavouritesSchema } from '@modules/favourites/schema'; // Adjust import path based on your project structure

// /**
//  * Service function to get songs by playlist ID
//  * @param p_id Playlist ID
//  * @returns Promise resolving to an array of songs in the playlist
//  */
// export const getSongByPlaylist = async (p_id: string) => {
//   return FavouritesSchema.findAll({
//     where: { p_id },
//     include: [{ model: SongSchema }],
//   }).then((favourites) => favourites.map((favourite) => favourite.id));
// };
