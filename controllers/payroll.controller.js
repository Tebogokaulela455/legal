// /controllers/payroll.controller.js
const { Payroll } = require("../models");

exports.findAll = async (req, res) => {
  try { res.json(await Payroll.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const pr = await Payroll.create(req.body);
    res.status(201).json(pr);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
