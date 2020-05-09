import Joi from 'joi';

export default {
  // POST /api/events
  createEvent: {
    body: {
      eventName: Joi.string().required(),
    },
  },

  // UPDATE /api/events/:eventId
  updateEvent: {
    body: {
      eventName: Joi.string().required(),
    },
    params: {
      eventId: Joi.string().hex().required(),
    },
  },
};
