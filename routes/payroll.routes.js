// /routes/payroll.routes.js
module.exports = (app) => {
  const c = require("../controllers/payroll.controller.js");
  app.get( "/api/payrolls",   c.findAll);
  app.post("/api/payrolls",   c.create);
};
