import Sequelize from 'sequelize';
import _ from 'lodash';
import { databaseConfig } from '../../config/database';
import { resourceFactory } from '../../db/factories/resource.factory';
import { importModels } from './importModels';

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

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

importModels(sequelize, db);

//
// // calling all the associate function, in order to make the association between the models
// // Object.keys(db).forEach((modelName) => {
// //   if (db[modelName].associate) {
// //     db[modelName].associate(db);
// //   }
// // });
//

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
  });

module.exports = _.extend(
  {
    sequelize,
    Sequelize,
  },
  db,
);
