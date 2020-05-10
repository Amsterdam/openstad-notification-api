module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define('template', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    body: {
      type: DataTypes.BLOB,
      allowNull: true,
      unique: false,
    }
  }, {});

  Template.associate = function(models) {
    Template.belongsToMany(models.ruleset, { through: 'ruleset_template' })
  };

  return Template;
};
