// /models/integration.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("integration", {
    system:   DataTypes.STRING,
    endpoint: DataTypes.STRING,
    authType: DataTypes.STRING,
    config:   DataTypes.JSON
  });
};
