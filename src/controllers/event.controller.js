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
  const event = Event.findOne({
    where: { eventLabel : request.eventLabel }
  });

  let notifications = [];

  event.rulesets.forEach((ruleset) => {
    if(rulesetService.match(ruleset, data)){
      const template = rulesetService.resolveTemplate(ruleset);

      notifications.push(notificationService.prepare(template));
    }
  });

  // notificationService.queue(notifications);

  return response.json(notifications);
}

export default {
  publish,
};
