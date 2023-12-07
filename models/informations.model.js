module.exports = (sequelize, Sequelize) => {
  const Informations = sequelize.define(
    "Information",
    {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      IdChoice: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Choices",
          key: "Id",
        },
      },
      Text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );

  return Informations;
};
