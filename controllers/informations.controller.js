const db = require("../models");
const Informations = db.informations;

exports.findAll = (req, res) => {
  Informations.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving informations.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Informations.findByPk(id)
    .then((data) => {
      if (data == null) {
        res.status(404).send({
          message: "Not found Information with id " + id,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Information with id=" + id,
      });
    });
};
