export function clientFactory(db) {
  const Client = db.client;

  return Client.bulkCreate([
    {
      label: 'Gemeente Amstelveen',
    },
    {
      label: 'Amsterdam Noord',
    },
  ]);
}
