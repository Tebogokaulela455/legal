// /models/security.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("security", {
    role:        DataTypes.STRING,
    permissions: DataTypes.JSON
  });
};
