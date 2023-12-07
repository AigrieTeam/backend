module.exports = (sequelize, Sequelize) => {
  const Test = sequelize.define(
    "User",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      nom: {
        type: Sequelize.STRING,
      },
      prenom: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
    },
  );

  return Test;
};
