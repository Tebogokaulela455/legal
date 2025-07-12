// /models/index.js
const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool
  }
);

const db = { Sequelize, sequelize };

// Register models
db.Case        = require("./case.model.js")(sequelize, DataTypes);
db.Workflow    = require("./workflow.model.js")(sequelize, DataTypes);
db.Reporting   = require("./reporting.model.js")(sequelize, DataTypes);
db.Financial   = require("./financial.model.js")(sequelize, DataTypes);
db.Purchasing  = require("./purchasing.model.js")(sequelize, DataTypes);
db.Fleet       = require("./fleet.model.js")(sequelize, DataTypes);
db.Payroll     = require("./payroll.model.js")(sequelize, DataTypes);
db.HR          = require("./hr.model.js")(sequelize, DataTypes);
db.Integration = require("./integration.model.js")(sequelize, DataTypes);
db.Audit       = require("./audit.model.js")(sequelize, DataTypes);
db.Security    = require("./security.model.js")(sequelize, DataTypes);

module.exports = db;


