// /routes/reporting.routes.js
module.exports = (app) => {
  const c = require("../controllers/reporting.controller.js");
  app.get( "/api/reportings",  c.findAll);
  app.post("/api/reportings",  c.create);
};
