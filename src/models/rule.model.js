module.exports = (sequelize, DataTypes) => {
  return sequelize.define('rule', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};
