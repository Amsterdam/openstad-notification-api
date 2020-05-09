module.exports = (sequelize, DataTypes) => {
  return sequelize.define('template', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  });
};
