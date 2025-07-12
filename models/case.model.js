// /models/case.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("case", {
    clientId:        DataTypes.STRING,
    title:           DataTypes.STRING,
    branch:          DataTypes.STRING,
    category:        DataTypes.STRING,
    meansTestScore:  DataTypes.INTEGER,
    turnaroundDays:  DataTypes.INTEGER
  });
};
