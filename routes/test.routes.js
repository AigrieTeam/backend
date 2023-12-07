module.exports = (app) => {
  const tests = require("../controllers/test.controller.js");

  var router = require("express").Router();

  router.get("/", tests.findAll);

  app.use("/api/tests", router);
};
