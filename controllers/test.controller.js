const db = require("../models");
const Test = db.tests;

exports.findAll = (req, res) => {

  Test.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
