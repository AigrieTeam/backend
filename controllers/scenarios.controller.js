const db = require("../models");
const Scenarios = db.scenarios;

exports.findAll = (req, res) => {
  Scenarios.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving scenarios.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Scenarios.findByPk(id)
    .then((data) => {
      if (data == null) {
        res.status(404).send({
          message: "Not found Scenario with id " + id,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Scenario with id=" + id,
      });
    });
};
