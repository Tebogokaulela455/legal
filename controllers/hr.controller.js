// /controllers/hr.controller.js
const { HR } = require("../models");

exports.findAll = async (req, res) => {
  try { res.json(await HR.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const h = await HR.create(req.body);
    res.status(201).json(h);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
