// /routes/financial.routes.js
module.exports = (app) => {
  const c = require("../controllers/financial.controller.js");
  app.get( "/api/financials",  c.findAll);
  app.post("/api/financials",  c.create);
};
