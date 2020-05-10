module.exports = (sequelize, DataTypes) => {
  const RuleSet = sequelize.define('ruleset', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {});

  RuleSet.associate = function(models) {
    RuleSet.hasOne(models.template)
  };

  return RuleSet;
};
