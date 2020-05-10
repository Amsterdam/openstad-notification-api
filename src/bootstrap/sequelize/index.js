import Sequelize from 'sequelize';
import _ from 'lodash';
import { databaseConfig } from '../../config/database';
import { importModels } from './importModels';
import { syncModels } from './syncModels';
import { associateModels } from './associateModels';

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
syncModels(sequelize, db);
associateModels(db);

module.exports = _.extend(
  {
    sequelize,
    Sequelize,
  },
  db,
);
