// /controllers/case.controller.js
const db = require("../models");
const Case = db.Case;

exports.findAll = async (req, res) => {
  try { res.send(await Case.findAll()); }
  catch (e) { res.status(500).send({ message: e.message }); }
};

exports.create = async (req, res) => {
  try {
    const c = await Case.create(req.body);
    res.status(201).send(c);
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
};
