import express from 'express';
import eventController from '../controllers/event.controller';

const router = express.Router();

router.route('/').get(eventController.list);

export default router;
