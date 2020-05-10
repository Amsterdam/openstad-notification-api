import express from 'express';
import rulesetController from '../controllers/ruleset.controller';

const router = express.Router();

router.route('/')
  .get(rulesetController.list)

router.route('/preview')
  .post(rulesetController.preview)

// router.param('rulesetId', rulesetController.load);

export default router;
