module.exports = (sequelize, Sequelize) => {
  const Test = sequelize.define("test", {
    id: {
      type: Sequelize.INTEGER,
    },
    nom: {
      type: Sequelize.VARCHAR,
    },
    prenom: {
      type: Sequelize.VARCHAR,
    },
    age : {
      type: Sequelize.INTEGER,
    },
    date : {
      type: Sequelize.DATE,
    },
  });

  return Test;
};
