import db from '../bootstrap/sequelize';
import rulesetService from '../services/ruleset.service';
import templateService from '../services/template.service';
import notificationService from '../services/notification.service';
import { config } from '../config/app';

const Event = db.event;
const Ruleset = db.ruleset;
const Template = db.template;

/**
 *
 * @param request
 * @param response
 * @returns {any}
 */
function publish(request, response) {
  const data = request.body;

  Ruleset.findAll({
    where: {
      client_key: data.clientKey,
    },
    include: Template,
  }).then((rulesets) => {
      let notifications = [];

      rulesets.forEach((ruleset) => {
        if (rulesetService.match(ruleset, data)) {
          const notificationInstance = templateService.resolve(ruleset.template, data);
          const user = {
            email: config.testAddress,
          };

          notifications.push(notificationService.prepare(notificationInstance, user));
        }
      });

      const result = notificationService.send(notifications, request.body);

      return response.json(result);
    },
  );
}

export default {
  publish,
};
