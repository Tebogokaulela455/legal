// /routes/audit.routes.js
module.exports = (app) => {
  const c = require("../controllers/audit.controller.js");
  app.get( "/api/audits",     c.findAll);
  app.post("/api/audits",     c.create);
};
