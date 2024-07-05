import { celebrate, Joi } from 'celebrate';

export const createEvent = celebrate({
  body: Joi.object({
    // Optional offset parameter for pagination
    title: Joi.string().required(),
    description: Joi.string().required(), // Optional filter by artist
    date: Joi.date().required(), // Optional filter by album
    location: Joi.string().required(), // Optional filter by genre
    type: Joi.string().required(), // Optional filter by release date
    // Optional filter by duration
  }),
});
