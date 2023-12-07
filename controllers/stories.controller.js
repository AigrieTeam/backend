const db = require("../models");
const Stories = db.stories;

exports.findAll = (req, res) => {
  Stories.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving story.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Stories.findByPk(id)
    .then((data) => {
      if (data == null) {
        res.status(404).send({
          message: "Not found Storie with id " + id,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Storie with id=" + id,
      });
    });
};
