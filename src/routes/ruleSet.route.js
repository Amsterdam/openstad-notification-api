import express from 'express';
import rulesetController from '../controllers/ruleset.controller';

const router = express.Router();

router.route('/')
  .get(rulesetController.list)
  .post(rulesetController.create);

router.route('/preview')
  .post(rulesetController.get)

router.param('rulesetId', rulesetController.load);

export default router;
