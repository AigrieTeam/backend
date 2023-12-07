module.exports = (sequelize, Sequelize) => {
  const ScenariosChoices = sequelize.define(
    "scenarios_choices",
    {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      Scenarios_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Scenarios",
          key: "Id",
        },
      },
      Choices_id: {
        type: Sequelize.INTEGER,
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
