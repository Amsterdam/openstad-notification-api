module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('notification', {
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      defaultValue: 'new',
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    body: {
      type: DataTypes.BLOB,
      allowNull: true,
      unique: false,
    }
  }, {});

  Notification.associate = function(models) {
    Notification.hasMany(models.ruleset)
  };

  return Notification;
};
