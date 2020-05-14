module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('client', {
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
  }, {});

  Client.associate = function(models) {
    Client.hasMany(models.ruleset, {foreignKey: 'client_key', sourceKey: 'key'})
  }

  return Client;
};
