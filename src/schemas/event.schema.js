import Joi from 'joi';

export default {
  // POST /api/events
  publish: {
    body: {
      eventLabel: Joi.string().required(),
      clientKey: Joi.string().required(),
    },
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
