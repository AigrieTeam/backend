const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  define: {
    freezeTableName: true,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//AJOUTER LES MODELS

db.stories = require("./stories.model.js")(sequelize, Sequelize);
db.scenarios = require("./scenarios.model.js")(sequelize, Sequelize);
db.choices = require("./choices.model.js")(sequelize, Sequelize);
db.informations = require("./informations.model.js")(sequelize, Sequelize);
db.scenarios_choices = require("./scenarios_choices.model.js")(
  sequelize,
  Sequelize,
);

module.exports = db;
