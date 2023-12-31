const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

const db = require("./models");

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

require("./routes/stories.routes.js")(app);
require("./routes/scenarios.routes.js")(app);
require("./routes/choices.routes.js")(app);
require("./routes/informations.routes.js")(app);
require("./routes/scenarios_choices.routes.js")(app);

app.get("/", (req, res) => {
  res.json({ welcome: "Root of AigrieTeam website" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
