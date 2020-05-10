import db from '../bootstrap/sequelize';
import controller from './controller';

const Ruleset = db.ruleset;

const list = (request, response, next) => controller.list(request, response, next, Ruleset);

/**
 * Get ruleset
 * @returns {Ruleset}
 */
function preview(request, response) {
  return response.json(request.ruleset);
}

export default {
  preview,
  list,
};
