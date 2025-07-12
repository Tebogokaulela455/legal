// /controllers/integration.controller.js
const { Integration } = require("../models");

exports.findAll = async (req, res) => {
  try { res.json(await Integration.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const i = await Integration.create(req.body);
    res.status(201).json(i);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
