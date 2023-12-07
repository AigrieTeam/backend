module.exports = (app) => {
  const informations = require("../controllers/informations.controller.js");

  var router = require("express").Router();

  router.get("/", informations.findAll);

  router.get("/:id", informations.findOne);

  app.use("/api/informations", router);
};
