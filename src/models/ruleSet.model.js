module.exports = (sequelize, DataTypes) => {
  return sequelize.define('rulesetset', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    entity: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    operator: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};
