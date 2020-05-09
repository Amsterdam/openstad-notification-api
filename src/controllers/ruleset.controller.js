import db from '../bootstrap/sequelize';

const Ruleset = db.ruleset;

/**
 * Get ruleset
 * @returns {Ruleset}
 */
function preview(request, response) {
  return response.json(request.ruleset);
}

export default {
  preview,
};
