import { resourceFactory } from '../../db/factories/resource.factory';
import { clientFactory } from '../../db/factories/client.factory';
import { rulesetFactory } from '../../db/factories/ruleset.factory';

export function syncModels(sequelize, db) {
  return sequelize.sync({ force: true })
    .then(() => resourceFactory(db))
    .then(() => clientFactory(db))
    .then(() => rulesetFactory(db))
    .then(() => {
      console.log(`Database & tables created!`);
    });
}
