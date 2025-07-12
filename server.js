// /server.js
require('dotenv').config();
const express = require('express');
const dbConfig = require('./config/db.config.js');
const { sequelize } = require('./models');

const app = express();
app.use(express.json());

// Sync DB (creates tables)
sequelize.sync({ alter: true })
  .then(() => console.log("✔ MySQL & tables synced"))
  .catch(console.error);

// Register routes
[
  "case","workflow","reporting","financial",
  "purchasing","fleet","payroll","hr",
  "integration","audit","security"
].forEach(m => {
  require(`./routes/${m}.routes.js`)(app);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
