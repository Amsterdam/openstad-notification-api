import express from 'express';
import eventRoutes from './event.route';
import resourceRoutes from './resource.route';

const router = express.Router();

/**
 *
 * GET /health-check - Check service health
 */
router.get('/', (req, res) => res.send('OK'));

/**
 *
 * Model routes
 */
router.use('/event', eventRoutes);
router.use('/resource', resourceRoutes);

export default router;
