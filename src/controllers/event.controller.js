import db from '../bootstrap/sequelize';

const Event = db.event;

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

  const data = {
    clientKey: request.clientKey
  };

  let notifications = [];

  event.rulesets.forEach((ruleset) => {
    if(rulesetService.match(ruleset, data)){
      const template = templateService.resolve(ruleset.template, data);

      notifications.push(notificationService.prepare(template));
    }
  });

  const responseBody = notificationService.send(notifications);

  return response.json(responseBody);
}

export default {
  publish,
};
