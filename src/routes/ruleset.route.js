import express from 'express';
import rulesetController from '../controllers/ruleset.controller';

const router = express.Router();

router.route('/')
  .get(rulesetController.list)

router.route('/:rulesetId')
  .get(rulesetController.get)

router.route('/preview/:rulesetId')
  .get(rulesetController.preview)

router.param('rulesetId', rulesetController.load);

export default router;
