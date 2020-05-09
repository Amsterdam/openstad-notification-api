import db from '../bootstrap/sequelize';

const Ruleset = db.ruleset;

/**
 * Get ruleset
 * @returns {Ruleset}
 */
function preview(req, res) {


  return res.json(req.ruleset);
}

export default {
  load,
  get,
  create,
  update,
  list,
  remove,
};
