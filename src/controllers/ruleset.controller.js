import db from '../bootstrap/sequelize';
import controller from './controller';

const Ruleset = db.ruleset;

const load = async (request, response, next, id) => controller.load(request, response, next, id, Ruleset);
const get = (request, response) => controller.get(request, response);
const list = (request, response, next) => controller.list(request, response, next, Ruleset);

/**
 * Get ruleset
 * @returns {Ruleset}
 */
function preview(request, response) {
  return response.json(JSON.parse(request.entity.body));
}

export default {
  load,
  get,
  list,
  preview,
};
