import express from 'express';
import eventRoutes from './event.route';

const router = express.Router();

/**
 *
 * GET /health-check - Check service health
 */
router.get('/', (req, res) => res.send('OK'));

/**
 *
 * Event routes
 */
router.use('/events', eventRoutes);

export default router;
