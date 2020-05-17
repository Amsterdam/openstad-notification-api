const newIdeaFeedbackToUser = require('./json/newIdeaFeedbackToUser.json')

export function clientFactory(db) {
  const Client = db.client;
  const Ruleset = db.ruleset;
  const Template = db.template;

  return Template.create(
    {
      label: 'newIdeaFeedbackToUser',
      text: 'Nieuw idea: feedback aan gebruiker\n' +
        '(opmerkingnTosh:) voorbeeld flow: \n' +
        'Call naar REST EVENT ENDPOINT. with variables: resource (idea), users, config/other variables, and clientKey/ID\n' +
        'Haal regels op basis van clientID op uit DB\n' +
        'Check loop door UX gedifinieerde regels eventType === \'CREATE\' and resource === \'idea\' and users.id === resource.user.id\n' +
        'Set email and if present name to the mailer\n' +
        'Get template with id ...\n' +
        'Pass variables to template\n' +
        'Send formatted template',
      subject: 'Nieuw idee!',
    }).then((template) => Client.bulkCreate([
      {
        label: 'Gemeente Amstelveen',
        key: 'gem_amstelveen_#@EWDs',
        rulesets: [
          {
            label: 'Notification to admin',
            body: JSON.stringify(newIdeaFeedbackToUser),
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
