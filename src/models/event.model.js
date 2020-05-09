module.exports = (sequelize, DataTypes) => {
  return sequelize.define('event', {
    label: {
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
