// import Joi from 'joi';
import { Joi } from 'express-validation';

export default {
  // POST /api/events
  publish: {
    body: Joi.object({
      eventLabel: Joi.string().required(),
      clientKey: Joi.string().required(),
    }),
  },

  // UPDATE /api/events/:eventId
  // updateEvent: {
  //   body: {
  //     eventName: Joi.string().required(),
  //   },
  //   params: {
  //     eventId: Joi.string().hex().required(),
  //   },
  // },
};
