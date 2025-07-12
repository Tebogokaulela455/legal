// /routes/security.routes.js
module.exports = (app) => {
  const c = require("../controllers/security.controller.js");
  app.get( "/api/securities",  c.findAll);
  app.post("/api/securities",  c.create);
};
