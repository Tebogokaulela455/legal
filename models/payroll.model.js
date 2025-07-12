// /models/payroll.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("payroll", {
    employeeId: DataTypes.STRING,
    payPeriod:  DataTypes.STRING,
    grossPay:   DataTypes.DECIMAL(15,2),
    deductions: DataTypes.JSON,
    netPay:     DataTypes.DECIMAL(15,2)
  });
};
