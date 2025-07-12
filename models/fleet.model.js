// /models/fleet.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("fleet", {
    vehicleId:      DataTypes.STRING,
    model:          DataTypes.STRING,
    licensePlate:   DataTypes.STRING,
    lastService:    DataTypes.DATE,
    nextServiceDue: DataTypes.DATE
  });
};
