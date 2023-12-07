module.exports = (app) => {
  const choices = require("../controllers/choices.controller.js");

  var router = require("express").Router();

  router.get("/", choices.findAll);

  router.get("/:id", choices.findOne);

  app.use("/api/choices", router);
};
