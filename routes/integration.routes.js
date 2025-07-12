// /routes/integration.routes.js
module.exports = (app) => {
  const c = require("../controllers/integration.controller.js");
  app.get( "/api/integrations",c.findAll);
  app.post("/api/integrations",c.create);
};
