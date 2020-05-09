/**
 * Event Schema
 */
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('events', {
    eventname: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
};
