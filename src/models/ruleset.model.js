module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ruleset', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};
