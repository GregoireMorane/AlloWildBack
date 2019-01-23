'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', [{
        category: 'Drame',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00'
      },{
        category: 'Biopic',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00'
      },{
        category: 'Oui',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00'
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categories', null, {});
  }
};
