'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    // 1:N com user. User tem uma company e company tem vários users
    Company.hasMany(models.User, {as: 'employes'})
  };
  return Company;
};