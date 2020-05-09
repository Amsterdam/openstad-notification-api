import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { databaseConfig } from '../config/database';

const db = {};

const sequelize = new Sequelize(
  databaseConfig.mysql.db,
  databaseConfig.mysql.user,
  databaseConfig.mysql.password,
  {
    dialect: 'mysql',
    port: databaseConfig.mysql.port,
    host: databaseConfig.mysql.host,
  },
);

const modelsDir = path.normalize(`${__dirname}/../models`);

// loop through all files in models directory ignoring hidden files and this file
fs
  .readdirSync(modelsDir)
  .filter(file => file.indexOf('.') !== 0 && file.indexOf('.map') === -1)
  // import model files and save model names
  .forEach((file) => {
    console.info(`Loading model file ${file}`);
    const model = sequelize.import(path.join(modelsDir, file));
    db[model.name] = model;
  });

// calling all the associate function, in order to make the association between the models
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Synchronizing any model changes with database.
sequelize.sync().then((err) => {
  if (err) console.error('An error occured %j', err);
  else console.info('Database synchronized');
});

// assign the sequelize variables to the db object and returning the db.
module.exports = _.extend(
  {
    sequelize,
    Sequelize,
  },
  db,
);
