import path from "path";
import fs from "fs";
import { resourceFactory } from '../../db/factories/resource.factory';

export function importModels(sequelize, db) {
  const modelsDir = path.normalize(`${__dirname}/../../models`);

  fs.readdirSync(modelsDir)
    .filter(file => file.indexOf('.') !== 0 && file.indexOf('.map') === -1)
    .forEach((file) => {
      console.info(`Loading model file ${file}`);

      const model = sequelize.import(path.join(modelsDir, file));

      db[model.name] = model;
    });

  sequelize.sync({ force: true })
    .then(() => resourceFactory(db))
    .then(() => {
      console.log(`Database & tables created!`);
    });
}
