import db from '../bootstrap/sequelize';
import controller from './controller';

const Ruleset = db.ruleset;

const load = async (request, response, next, id) => controller.load(request, response, next, id, Ruleset);
const list = (request, response, next) => controller.list(request, response, next, Ruleset);
const get = (request, response) => controller.get(request, response);
const create = (request, response, next) => controller.create(request, response, next, Ruleset);
const update = (request, response, next) => controller.update(request, response, next, Ruleset);
const remove = (request, response, next) => controller.remove(request, response, next, Ruleset);

/**
 * Get ruleset
 * @returns {Ruleset}
 */
function preview(request, response) {
  return response.json('qwsd3s');
  return response.json(JSON.parse(request.entity.body));
}

export default {
  load,
  get,
  list,
  preview,
  create,
  update,
  remove,
};
