import db from '../bootstrap/sequelize';
import rulesetService from '../services/ruleset.service';
import templateService from '../services/template.service';
import notificationService from '../services/notification.service';

const Event = db.event;
const Client = db.event;

/**
 *
 * @param request
 * @param response
 * @returns {any}
 */
function publish(request, response) {
  const client = Client.findOne({
    where: { clientKey : request.clientKey }
  });

  let notifications = [];

  client.rulesets.forEach((ruleset) => {
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
