module.exports = (sequelize, Sequelize) => {
    const Scenarios = sequelize.define(
      "Scenario",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        context: {
          type: Sequelize.STRING,
        },
        story: {
          type: Sequelize.STRING,
          references : {
            model: 'Stories',
            key: 'id'
          }
        },
      },
      {
        timestamps: false,
      },
    );
  
    return Scenarios;
  };
  