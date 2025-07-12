// /controllers/security.controller.js
const { Security } = require("../models");

exports.findAll = async (req, res) => {
  try { res.json(await Security.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const s = await Security.create(req.body);
    res.status(201).json(s);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
