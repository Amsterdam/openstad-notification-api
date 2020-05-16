import express from 'express';
import rulesetController from '../controllers/ruleset.controller';
import { validate } from 'express-validation';
import ruleSetValidation from '../schemas/ruleset.schema';
import validationOptions from '../bootstrap/errorHandling/validationOptions';

const router = express.Router();

router.route('/')
  .get(rulesetController.list)
  .post(validate(ruleSetValidation.createUpdate, validationOptions), rulesetController.create)

router.route('/:rulesetId')
  .get(rulesetController.get)
  .post(validate(ruleSetValidation.createUpdate, validationOptions), rulesetController.update)
  .delete(rulesetController.remove)

router.route('/preview/:rulesetId')
  .get(rulesetController.preview)

router.param('rulesetId', rulesetController.load);

export default router;
