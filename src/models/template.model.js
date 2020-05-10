module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define('template', {
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
  }, {});

  Template.associate = function(models) {
    Template.belongsToMany(models.ruleset, { through: 'ruleset_template' })
  };

  return Template;
};
