module.exports = (sequelize, Sequelize) => {
  const Scenarios = sequelize.define(
    "scenarios",
    {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      Context: {
        type: Sequelize.STRING,
      },
      Story: {
        type: Sequelize.STRING,
        references: {
          model: "Stories",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    },
  );

  return Scenarios;
};
