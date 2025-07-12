// /models/audit.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("audit", {
    userId:  DataTypes.STRING,
    action:  DataTypes.STRING,
    module:  DataTypes.STRING,
    details: DataTypes.JSON
  });
};
