// /controllers/fleet.controller.js
const { Fleet } = require("../models");

exports.findAll = async (req, res) => {
  try { res.json(await Fleet.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const v = await Fleet.create(req.body);
    res.status(201).json(v);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
