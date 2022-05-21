module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,

        },

        displayName: {
          allowNull: false,
          type: Sequelize.STRING,
        },

        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },

        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        image: {
          type: Sequelize.STRING,
          allowNull: false,
        }

      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
