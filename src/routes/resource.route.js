import express from 'express';
import resourceController from '../controllers/resource.controller';

const router = express.Router();

router.route('/').get(resourceController.list);

export default router;
