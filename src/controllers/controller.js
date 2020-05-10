import httpStatus from 'http-status';

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
 * @param entity
 * @returns {any}
 */
function get(request, response, entity) {
  return response.json(request[entity]);
}

/**
 *
 * @param request
 * @param response
 * @param next
 */
function create(request, response, next, Entity) {
  const entity = Entity.build({
    entityName: request.body.entityName,
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
 */
function update(request, response, next) {
  const entity = request.entity;
  entity.entityName = request.body.entityName;
  entity.mobileNumber = request.body.mobileNumber;

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
function list(request, response, next) {
  const { limit = 50 } = request.query;

  Entity.findAll({ limit })
    .then(entitys => response.json(entities))
    .catch(e => next(e));
}

/**
 * Delete entity.
 * @returns {Entity}
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
