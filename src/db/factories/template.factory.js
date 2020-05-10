const notificationToAdmin = require('./json/notificationToAdmin.json')

export function templateFactory(db) {
  const Template = db.template;
  const Ruleset = db.ruleset;

  return Template.create(
    {
      label: 'test_template',
      body: 'TEST template',
      rulesets: [
        {
          label: 'Notification to admin',
          body: JSON.stringify(notificationToAdmin),
        },
      ]
    }, {
      include: [ Ruleset]
    });
}
