module.exports = (sequelize, Sequelize) => {
  const ScenariosChoices = sequelize.define(
    "scenarios_choices",
    {
      Scenarios_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Scenarios",
          key: "Id",
        },
      },
      Choices_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Choices",
          key: "Id",
        },
      },
    },
    {
      timestamps: false,
    },
  );

  return ScenariosChoices;
};
