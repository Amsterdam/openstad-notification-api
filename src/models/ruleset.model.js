module.exports = (sequelize, DataTypes) => {
  const RuleSet = sequelize.define('ruleset', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  }, {});

  RuleSet.associate = function(models) {
    RuleSet.belongsTo(models.template)
  };

  return RuleSet;
};
