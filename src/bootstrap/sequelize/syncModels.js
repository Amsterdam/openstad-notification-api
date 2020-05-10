import { runFactories } from '../../db/factories/index.factory';

export function syncModels(sequelize, db) {
  return sequelize.sync({ force: true })
    .then(() => runFactories(db))
    .then(() => {
      console.log(`Database & tables created!`);
    });
}
