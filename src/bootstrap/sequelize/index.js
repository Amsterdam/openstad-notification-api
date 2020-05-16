import Sequelize from 'sequelize';
import _ from 'lodash';
import { config } from '../../config/app';
import { importModels } from './importModels';
import { syncModels } from './syncModels';
import { associateModels } from './associateModels';

const db = {};

const sequelize = new Sequelize(
  config.mysql.db,
  config.mysql.user,
  config.mysql.password,
  {
    dialect: 'mysql',
    port: config.mysql.port,
    host: config.mysql.host,
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
