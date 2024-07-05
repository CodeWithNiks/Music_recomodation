import { ICreateRsvpequest } from '@modules/rsvps/model';
import { rsvpSchema } from '@modules/rsvps/schema';

/**
 * Service function to create a new song using Sequelize
 * @param data Object containing song details to be created
 * @returns Promise resolving to the created song object
 */
export const addRsvp = async (data: ICreateRsvpequest) => {
  const rsvps = await rsvpSchema.create({
    id: data.id,
    e_id: data.e_id,
  });

  return rsvps;
};
