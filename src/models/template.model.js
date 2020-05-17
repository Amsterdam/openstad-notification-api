module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define('template', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    text: {
      type: DataTypes.BLOB,
      allowNull: true,
      unique: false,
    },
    templateFile: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    }
  }, {});

  Template.associate = function(models) {
    Template.hasMany(models.ruleset)
  };

  return Template;
};
