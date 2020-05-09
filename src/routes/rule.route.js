import express from 'express';
import validate from 'express-validation';
import eventSchema from '../schemas/event.schema';
import eventController from '../controllers/event.controller';

const router = express.Router();

router.route('/')
  .get(eventController.list)
  // .post(validate(eventSchema.createEvent), eventController.create);

router.route('/:eventId')
  .get(eventController.get)
  // .put(validate(eventSchema.updateEvent), eventController.update)
  // .delete(eventController.remove);

router.param('eventId', eventController.load);

export default router;
