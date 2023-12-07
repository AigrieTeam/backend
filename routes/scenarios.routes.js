module.exports = (app) => {
    const scenarios = require("../controllers/scenarios.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", scenarios.findAll);
  
    app.use("/api/scenarios", router);
  };
  