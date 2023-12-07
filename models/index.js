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
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//AJOUTER LES MODELS

db.tests = require("./test.model.js")(sequelize, Sequelize);
db.stories = require('./stories.model.js')(sequelize, Sequelize);
db.scenarios = require('./scenarios.model.js')(sequelize, Sequelize);

module.exports = db;
