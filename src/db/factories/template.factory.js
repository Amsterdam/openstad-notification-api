export function templateFactory(db) {
  const Template = db.template;

  return Template.bulkCreate([
    {
      label: 'test_template',
      body: 'TEST template',
    },
  ]);
}
