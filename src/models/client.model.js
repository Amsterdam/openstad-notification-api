module.exports = (sequelize, DataTypes) => {
  return sequelize.define('client', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  });
};
