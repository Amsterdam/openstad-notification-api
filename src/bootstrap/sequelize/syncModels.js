import { resourceFactory } from '../../db/factories/resource.factory';
import { clientFactory } from '../../db/factories/client.factory';
import { templateFactory } from '../../db/factories/template.factory';

export function syncModels(sequelize, db) {
  return sequelize.sync({ force: true })
    .then(() => resourceFactory(db))
    .then(() => clientFactory(db))
    .then(() => templateFactory(db))
    .then(() => {
      console.log(`Database & tables created!`);
    });
}
