'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Repos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      repo_id: {
        allowNull: false,
        autoIncrement: false,
        type: Sequelize.INTEGER,
      },
      full_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      html_url: {
        type: Sequelize.STRING
      },
      stargazers_count: {
        type: Sequelize.INTEGER
      },
      stargazers_url: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      license_name: {
        type: Sequelize.STRING
      },
      open_issues_count: {
        type: Sequelize.INTEGER
      },
      last_update: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Repos');
  }
};