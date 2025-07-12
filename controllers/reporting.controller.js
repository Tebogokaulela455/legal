// /controllers/reporting.controller.js
const { Reporting } = require("../models");

exports.findAll = async (req, res) => {
  try { res.json(await Reporting.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const r = await Reporting.create(req.body);
    res.status(201).json(r);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
