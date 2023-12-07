const db = require("../models");
const Scenarios = db.scenarios;

exports.findAll = (req, res) => {

  Stories.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Scenarios.",
      });
    });
};


exports.findOne = (req, res) => {

    const id = req.params.id;

    Stories.findOne(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error while retrieving scenario "+ id,
      });
    });
}
