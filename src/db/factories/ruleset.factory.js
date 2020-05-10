const notificationToAdmin = require('./json/notificationToAdmin.json')

export function rulesetFactory(db) {
  const Ruleset = db.ruleset;

  return Ruleset.bulkCreate([
    {
      label: 'Notification to admin',
      body: JSON.stringify(notificationToAdmin),
    },
  ]);
}
