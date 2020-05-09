export function resourceFactory(db) {
  const Resource = db.resource;

  return Resource.bulkCreate([
    {
      label: 'idea',
      ownerId: 1,
    },
    {
      label: 'vote',
      ownerId: 1,
    },
  ]);
}
