import { sequelize } from '../utils/sequelize'

/**
 * Event Schema
 */
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('event', {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};
