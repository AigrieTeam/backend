const db = require("../models");
const Stories = db.stories;

exports.findAll = (req, res) => {

  Stories.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving story.",
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
          err.message || "Error while retrieving story "+ id,
      });
    });
}
