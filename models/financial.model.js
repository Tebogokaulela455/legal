// /models/financial.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("financial", {
    glAccount:   DataTypes.STRING,
    amount:      DataTypes.DECIMAL(15,2),
    date:        DataTypes.DATE,
    description: DataTypes.STRING
  });
};
