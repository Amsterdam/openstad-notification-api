import express from 'express';
import eventController from '../controllers/event.controller';

const router = express.Router();

router.route('/publish').post(eventController.publish())

export default router;
