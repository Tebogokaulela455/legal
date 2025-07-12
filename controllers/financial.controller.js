// /controllers/financial.controller.js
const { Financial } = require("../models");

exports.findAll = async (req, res) => {
  try { res.json(await Financial.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const f = await Financial.create(req.body);
    res.status(201).json(f);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
