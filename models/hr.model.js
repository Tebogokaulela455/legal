// /models/hr.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("hr", {
    employeeId:        DataTypes.STRING,
    name:              DataTypes.STRING,
    position:          DataTypes.STRING,
    department:        DataTypes.STRING,
    hireDate:          DataTypes.DATE,
    performanceReviews: DataTypes.JSON
  });
};
