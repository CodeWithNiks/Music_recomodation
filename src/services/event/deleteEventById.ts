import { EventSchema } from '@modules/event/schema'; // Adjust import path based on your project structure

/**
 * Service function to delete a song by its ID using Sequelize
 * @param e_id ID of the song to delete
 * @returns Promise resolving to true if deletion was successful, false otherwise
 */
export const deleteEventById = async (e_id: string) => {
  const event = await EventSchema.findByPk(e_id);

  if (!event) {
    return false; // Song not found
  }

  await event.destroy();
  return true;
};
