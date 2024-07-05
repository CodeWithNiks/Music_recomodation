import { EventSchema } from '@modules/event/schema'; // Adjust import path based on your project structure
// Adjust import path based on your project structure

/**
 * Service function to retrieve a song by its ID using Sequelize
 * @param e_id ID of the song to retrieve
 * @returns Promise resolving to the song object or null if not found
 */
export const getEventById = async (e_id: string) => {
  return EventSchema.findByPk(e_id);
};
