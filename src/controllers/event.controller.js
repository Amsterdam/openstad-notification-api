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
async function publish(request, response) {
  const data = request.body;

  const rulesets = await Ruleset.findAll({
    where: {
      client_key: data.clientKey,
    },
    include: Template,
  });

  const notifications = rulesets.map((ruleset) => {
    if (rulesetService.match(ruleset, data)) {
      const user = {
        email: config.testAddress,
      };

      const subject = ruleset.template.subject;
      const text = 'text';
      const html = templateService.resolve(ruleset.template, data);

      return notificationService.prepare(user, subject, text, html);
    }
  });

  const result = notificationService.send(notifications, request.body);

  return response.json(result);
}

export default {
  publish,
};
