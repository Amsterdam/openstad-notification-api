import httpStatus from 'http-status';
import db from '../bootstrap/sequelize';

const Resource = db.resource;
console.log('resource')
console.log(Resource)

/**
 *
 * Get resource list.
 * @property {number} req.query.skip - Number of resources to be skipped.
 * @property {number} req.query.limit - Limit number of resources to be returned.
 * @returns {Resource[]}
 */
function list(req, res, next) {
  const { limit = 50 } = req.query;

  Resource.findAll({ limit })
    .then(resources => res.json(resources))
    .catch(e => next(e));
}


export default {
  list,
};
