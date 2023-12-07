module.exports = (app) => {
    const stories = require("../controllers/stories.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", stories.findAll);
  
    app.use("/api/stories", router);
  };
  