// /routes/purchasing.routes.js
module.exports = (app) => {
  const c = require("../controllers/purchasing.controller.js");
  app.get( "/api/purchasings", c.findAll);
  app.post("/api/purchasings", c.create);
};
