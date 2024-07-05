import { ICreateEventRequest } from '@modules/event/model';
import { EventSchema } from '@modules/event/schema';

/**
 * Service function to update a song by its ID using Sequelize
 * @param e_id ID of the song to update
 * @param data Object containing updated song details
 * @returns Promise resolving to the updated song object or null if not found
 */
export const updateEventById = async (e_id: string, data: Partial<ICreateEventRequest>) => {
  const event = await EventSchema.findByPk(e_id);

  if (!event) {
    return null;
  }

  await event.update({
    title: data.title,
    description: data.description,
    date: data.date,
    location: data.location,
    type: data.type,
  });

  return event;
};
