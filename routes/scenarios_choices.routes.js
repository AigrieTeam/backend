module.exports = (app) => {
  const scenarios_choices = require("../controllers/scenarios_choices.controller.js");

  var router = require("express").Router();

  router.get("/", scenarios_choices.findAll);

  router.get("/:id", scenarios_choices.findOne);

  app.use("/api/scenarios_choices", router);
};
