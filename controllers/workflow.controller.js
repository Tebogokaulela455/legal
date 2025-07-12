// /controllers/workflow.controller.js
const { Workflow } = require("../models");

exports.findAll = async (req, res) => {
  try { res.json(await Workflow.findAll()); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const w = await Workflow.create(req.body);
    res.status(201).json(w);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
