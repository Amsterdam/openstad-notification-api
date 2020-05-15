import db from '../bootstrap/sequelize';
import rulesetService from '../services/ruleset.service';
import templateService from '../services/template.service';
import notificationService from '../services/notification.service';

const Event = db.event;
const Ruleset = db.ruleset;

/**
 *
 * @param request
 * @param response
 * @returns {any}
 */
function publish(request, response) {
  const data = request.body;

  Ruleset.findAll({
    where: { client_key : data.clientKey }
  }).then((rulesets) => {
      let notifications = [];

      rulesets.forEach((ruleset) => {
        if(rulesetService.match(ruleset, data)){
          const template = templateService.resolve(ruleset.template, data);

          notifications.push(notificationService.prepare(template));
        }
      });
    const result = notificationService.send(notifications);

    return response.json(result);
    }
  );
}

export default {
  publish,
};
