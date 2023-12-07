const db = require("../models");
const ScenariosChoices = db.scenarios_choices;

exports.findAll = (req, res) => {
  ScenariosChoices.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving scenarios_choices.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  ScenariosChoices.findByPk(id)
    .then((data) => {
      if (data == null) {
        res.status(404).send({
          message: "Not found ScenariosChoices with id " + id,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving ScenariosChoices with id=" + id,
      });
    });
};
