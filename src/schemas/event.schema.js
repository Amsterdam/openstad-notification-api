// import Joi from 'joi';
import { Joi } from 'express-validation';

export default {
  // POST /api/events
  publish: {
    body: Joi.object({
      eventType: Joi.string().required(),
      clientKey: Joi.string().required(),
      resource: Joi.string().required(),
      userRole: Joi.string().required(),
      userEmail: Joi.string().required(),
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
