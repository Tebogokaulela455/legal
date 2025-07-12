// /controllers/purchasing.controller.js
const { Purchasing } = require("../models");

exports.findAll = async (req, res) => {
  try { res.json(await Purchasing.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const p = await Purchasing.create(req.body);
    res.status(201).json(p);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
