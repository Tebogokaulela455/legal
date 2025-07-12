// /routes/case.routes.js
module.exports = (app) => {
  const controller = require("../controllers/case.controller.js");
  app.get( "/api/cases",  controller.findAll);
  app.post("/api/cases",  controller.create);
};
