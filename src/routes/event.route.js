import express from 'express';
import validate from 'express-validation';
import eventSchema from '../schemas/event.schema';
import eventCtrl from '../controllers/event.controller';

const router = express.Router();

router.route('/')
  .get(eventCtrl.list)
  // .post(validate(eventSchema.createEvent), eventCtrl.create);

router.route('/:eventId')
  .get(eventCtrl.get)
  // .put(validate(eventSchema.updateEvent), eventCtrl.update)
  // .delete(eventCtrl.remove);

/** Load event when API with eventId route parameter is hit */
router.param('eventId', eventCtrl.load);

export default router;
