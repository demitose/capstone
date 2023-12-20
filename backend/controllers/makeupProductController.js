"use strict";
const Models = require("../models");
const getMakeupProduct = (res) => {
  Models.MakeupProduct.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createMakeupProduct = (data, res) => {
  Models.MakeupProduct.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateMakeupProduct = (req, res) => {
  Models.MakeupProduct.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

const deleteMakeupProduct = (req, res) => {
  Models.MakeupProduct.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

module.exports = {
getMakeupProduct,
  createMakeupProduct,
  deleteMakeupProduct,
  updateMakeupProduct,
};
