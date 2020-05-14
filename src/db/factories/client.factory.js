export function clientFactory(db) {
  const Client = db.client;

  return Client.bulkCreate([
    {
      label: 'Gemeente Amstelveen',
      key: 'gem_amstelveen_#@EWDs',
    },
    {
      label: 'Amsterdam Noord',
      key: 'gem_amsterdam_#@32ewds',
    },
  ]);
}
