import express from 'express';
import { validate } from 'express-validation';
import eventController from '../controllers/event.controller';
import paramValidation from '../schemas/event.schema';
import validationOptions from '../bootstrap/errorHandling/validationOptions';

const router = express.Router();

router.route('/publish').post(validate(paramValidation.publish, validationOptions), eventController.publish);

export default router;
