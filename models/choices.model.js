module.exports = (sequelize, Sequelize) => {
  const Choices = sequelize.define(
    "choices",
    {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      Answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Money: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Pollution: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Time: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Health: {
        type: Sequelize.INTEGER,
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
