import httpStatus from 'http-status';
import db from '../bootstrap/sequelize';

const Rule = db.rule;

/**
 * Load rule and append to req.
 */
async function load(req, res, next, id) {
  try {
    const ruleFoundResponse = await Rule.findByPk(id);

    if (!ruleFoundResponse) {
      const e = new Error('Rule does not exist');
      e.status = httpStatus.NOT_FOUND;
      return next(e);
    }

    req.rule = ruleFoundResponse; // eslint-disable-line no-param-reassign

      return next();
  } catch (error) {
    console.log('error');
    console.log(error);

    return next(error);
  }
}

/**
 * Get rule
 * @returns {Rule}
 */
function get(req, res) {
  return res.json(req.rule);
}

/**
 * Create new rule
 * @property {string} req.body.ruleName - The ruleName of rule.
 * @property {string} req.body.mobileNumber - The mobileNumber of rule.
 * @returns {Rule}
 */
function create(req, res, next) {
  const rule = Rule.build({
    ruleName: req.body.ruleName,
  });

  rule.save()
    .then(savedRule => res.json(savedRule))
    .catch(e => next(e));
}

/**
 * Update existing rule
 * @property {string} req.body.ruleName - The ruleName of rule.
 * @property {string} req.body.mobileNumber - The mobileNumber of rule.
 * @returns {Rule}
 */
function update(req, res, next) {
  const rule = req.rule;
  rule.ruleName = req.body.ruleName;
  rule.mobileNumber = req.body.mobileNumber;

  rule.save()
    .then(savedRule => res.json(savedRule))
    .catch(e => next(e));
}

/**
 * Get rule list.
 * @property {number} req.query.skip - Number of rules to be skipped.
 * @property {number} req.query.limit - Limit number of rules to be returned.
 * @returns {Rule[]}
 */
function list(req, res, next) {
  const { limit = 50 } = req.query;

  Rule.findAll({ limit })
    .then(rules => res.json(rules))
    .catch(e => next(e));
}

/**
 * Delete rule.
 * @returns {Rule}
 */
function remove(req, res, next) {
  const rule = req.rule;
  const ruleName = req.rule.ruleName;

  rule.destroy()
    .then(() => res.json(ruleName))
    .catch(e => next(e));
}

export default {
  load,
  get,
  create,
  update,
  list,
  remove,
};
