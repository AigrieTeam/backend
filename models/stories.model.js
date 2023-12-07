module.exports = (sequelize, Sequelize) => {
    const Stories = sequelize.define(
      "Storie",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
        },
      },
      {
        timestamps: false,
      },
    );
  
    return Stories;
  };
  