const db = require("../models");
const Choices = db.choices;

exports.findAll = (req, res) => {
  Choices.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving choices.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Choices.findByPk(id)
    .then((data) => {
      if (data == null) {
        res.status(404).send({
          message: "Not found Choice with id " + id,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Choice with id=" + id,
      });
    });
};
