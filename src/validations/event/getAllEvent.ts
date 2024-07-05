import { celebrate, Joi } from 'celebrate';

export const getAllEvent = celebrate({
  params: Joi.object({
    // Optional offset parameter for pagination
    title: Joi.string().required(),
    description: Joi.string().optional(), // Optional filter by artist
    date: Joi.date().optional(), // Optional filter by album
    location: Joi.string().optional(), // Optional filter by genre
    type: Joi.string().optional(), // Optional filter by release date
    // Optional filter by duration
  }),
});
