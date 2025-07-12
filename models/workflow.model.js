// /models/workflow.model.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("workflow", {
    caseId:     DataTypes.INTEGER,
    step:       DataTypes.STRING,
    assignedTo: DataTypes.STRING,
    status:     DataTypes.STRING,
    dueDate:    DataTypes.DATE
  });
};
