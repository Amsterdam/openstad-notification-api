export function templateFactory(db) {
  const Template = db.template;

  return Template.bulkCreate([
    {
      label: 'idea',
      subject: 'idea',
      body: 'Hello World!',
    },
    {
      label: 'idea2',
      subject: 'idea',
      body: 'Hello World!',
    },
  ]);
}
