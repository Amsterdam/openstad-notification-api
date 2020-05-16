import express from 'express';
import rulesetController from '../controllers/ruleset.controller';

const router = express.Router();

router.route('/')
  .get(rulesetController.list)
  .post(rulesetController.create)

router.route('/:rulesetId')
  .get(rulesetController.get)
  .post(rulesetController.update)
  .delete(rulesetController.remove)

router.route('/preview/:rulesetId')
  .get(rulesetController.preview)

router.param('rulesetId', rulesetController.load);

export default router;
