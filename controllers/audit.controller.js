// /controllers/audit.controller.js
const { Audit } = require("../models");

exports.findAll = async (req, res) => {
  try { res.json(await Audit.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const a = await Audit.create(req.body);
    res.status(201).json(a);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
