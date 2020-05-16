import { Joi } from 'express-validation';

export default {
  createUpdate: {
    body: Joi.object({
      label: Joi.string().required(),
      body: Joi.string().required(),
    }),
  },
};
