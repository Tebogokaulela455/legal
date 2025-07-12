// /models/reporting.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("reporting", {
    name:       DataTypes.STRING,
    parameters: DataTypes.JSON,
    lastRun:    DataTypes.DATE
  });
};
