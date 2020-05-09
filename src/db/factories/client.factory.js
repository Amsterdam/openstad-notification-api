export function clientFactory(db) {
  const Client = db.client;

  return Client.bulkCreate([
    {
      label: 'Gemeente Amstelveen',
      clientKey: 'gem_amstelveen_#@EWDs',
    },
    {
      label: 'Amsterdam Noord',
      clientKey: 'gem_amsterdam_#@32ewds',
    },
  ]);
}
