'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('Repos', {
      fields: ['repo_id'],
      type: 'unique'
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('Repos', {
      fields: ['repo_id'],
      type: 'unique'
    })
  }
};
