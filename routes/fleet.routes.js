// /routes/fleet.routes.js
module.exports = (app) => {
  const c = require("../controllers/fleet.controller.js");
  app.get( "/api/fleets",     c.findAll);
  app.post("/api/fleets",     c.create);
};
