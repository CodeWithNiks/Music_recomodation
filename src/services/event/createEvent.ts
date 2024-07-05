import { ICreateEventRequest } from '@modules/event/model';
import { EventSchema } from '@modules/event/schema';

/**
 * Service function to create a new song using Sequelize
 * @param data Object containing song details to be created
 * @returns Promise resolving to the created song object
 */
export const createEvent = async (data: ICreateEventRequest) => {
  const event = await EventSchema.create({
    title: data.title,
    description: data.description,
    date: data.date,
    location: data.location,
    type: data.type,
  });

  return event;
};
