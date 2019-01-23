'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('movies', [{
        title: 'La Mule',
        description: 'bla',
        director : 'oui',
        release_date : 'oui',
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('movies', null, {});
  }
};
