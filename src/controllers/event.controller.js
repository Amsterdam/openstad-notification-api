import httpStatus from 'http-status';
import db from '../bootstrap/sequelize';

const Event = db.event;
const Client = db.client;

/**
 *
 * @param request
 * @param response
 * @returns {any}
 */
function publish(request, response) {


  return response.json(request.rule);
}

export default {
  publish,
};
