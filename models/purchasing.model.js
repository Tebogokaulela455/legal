// /models/purchasing.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("purchasing", {
    vendor: DataTypes.STRING,
    items:  DataTypes.JSON,
    total:  DataTypes.DECIMAL(15,2),
    status: DataTypes.STRING
  });
};
