module.exports = (app) => {
  const stories = require("../controllers/stories.controller.js");

  var router = require("express").Router();

  router.get("/", stories.findAll);

  router.get("/:id", stories.findOne);

  app.use("/api/stories", router);
};
