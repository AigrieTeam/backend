module.exports = (sequelize, Sequelize) => {
  const Choices = sequelize.define(
    "Choice",
    {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      Answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Next: {
        type: Sequelize.INTEGER,
        references: {
          model: "Scenarios",
          key: "Id",
        },
      },
    },
    {
      timestamps: false,
    },
  );

  return Choices;
};
