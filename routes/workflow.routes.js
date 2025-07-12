// /routes/workflow.routes.js
module.exports = (app) => {
  const c = require("../controllers/workflow.controller.js");
  app.get( "/api/workflows",  c.findAll);
  app.post("/api/workflows",  c.create);
};
