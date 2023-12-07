const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

const db = require("./models");

db.sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

require("./routes/test.routes.js")(app);

app.get("/", (req, res) => {
  res.json({ welcome: "Root of AigrieTeam website" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
