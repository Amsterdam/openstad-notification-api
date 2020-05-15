import httpStatus from 'http-status';

/**
 * Abstract Controller methods.
 */

/**
 * Load entity and append to request.
 */
async function load(request, response, next, id, Entity) {
  try {
    const entityFoundResponse = await Entity.findByPk(id);

    if (!entityFoundResponse) {
      const e = new Error('Entity does not exist');
      e.status = httpStatus.NOT_FOUND;
      return next(e);
    }

    request.entity = entityFoundResponse;

    return next();
  } catch (error) {
    console.log('error');
    console.log(error);

    return next(error);
  }
}

/**
 *
 * @param request
 * @param response
 * @returns {any}
 */
function get(request, response) {
  return response.json(request.entity);
}

/**
 *
 * @param request
 * @param response
 * @param next
 * @param Entity
 */
function create(request, response, next, Entity) {
  const entity = Entity.build({...request.body});

  entity.save()
    .then(savedEntity => response.json(savedEntity))
    .catch(e => next(e));
}

/**
 *
 * @param request
 * @param response
 * @param next
 */
function update(request, response, next) {
  let { entity, body } = request.entity;

  Object.keys(body).forEach((key) => {
    // TODO prevent mass assignment
    entity[key] = body[key];
  });

  entity.save()
    .then(savedEntity => response.json(savedEntity))
    .catch(e => next(e));
}

/**
 *
 * @param request
 * @param response
 * @param next
 * @param Entity
 * @returns {Promise<T | void>}
 */
function list(request, response, next, Entity) {
  const { limit = 50 } = request.query;

  return Entity.findAll({ limit })
    .then(entities => response.json(entities))
    .catch(e => console.log(e));
}

/**
 *
 * @param request
 * @param response
 * @param next
 */
function remove(request, response, next) {
  const entity = request.entity;
  const entityName = request.entity.entityName;

  entity.destroy()
    .then(() => response.json(entityName))
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
