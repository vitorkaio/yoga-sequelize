'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // 1:N com company. User tem uma company e company tem vários users
    User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})

    // N:N com workingDay. User tem vários workingDay e workingDay tem vários User
    User.belongsToMany(models.WorkingDay, {through: 'UsersWorkingDays', foreignKey: 'userId', as: 'days'})
  };
  return User;
};