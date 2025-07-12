// /routes/hr.routes.js
module.exports = (app) => {
  const c = require("../controllers/hr.controller.js");
  app.get( "/api/hrs",        c.findAll);
  app.post("/api/hrs",        c.create);
};
