module.exports = (sequelize, Sequelize) => {
  const Stories = sequelize.define(
    "stories",
    {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      Name: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    },
  );

  return Stories;
};
