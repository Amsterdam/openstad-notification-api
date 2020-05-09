module.exports = (sequelize, DataTypes) => {
  return sequelize.define('resource', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
  });
};
