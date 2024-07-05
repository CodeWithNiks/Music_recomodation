import { EventSchema } from '@modules/event/schema';
export const getAllEvent = async () => {
  return EventSchema.findAll();
};
