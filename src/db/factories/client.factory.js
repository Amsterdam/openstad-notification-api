const notificationToAdmin = require('./json/notificationToAdmin.json')

export function clientFactory(db) {
  const Client = db.client;
  const Ruleset = db.ruleset;
  const Template = db.template;

  return Template.create(
    {
      label: 'test_template',
      body: 'TEST template',
      subject: 'TEST template',
    }).then((template) => Client.bulkCreate([
      {
        label: 'Gemeente Amstelveen',
        key: 'gem_amstelveen_#@EWDs',
        rulesets: [
          {
            label: 'Notification to admin',
            body: JSON.stringify(notificationToAdmin),
            templateId: template.id,
          },
        ]
      },
      {
        label: 'Amsterdam Noord',
        key: 'gem_amsterdam_#@32ewds',
      },
    ], {
      include: [ Ruleset]
    }).then(() => console.info('\x1b[33m%s\x1b[0m' ,'Finished running db factories'))
  );
}
