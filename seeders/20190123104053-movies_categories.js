'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('movies_categories', [{
        createdAt: '2019-01-09 10:00:00',
        updatedAt: '2019-01-09 10:00:00',
        categoryId: 1,
        movieId : 1
      },{
        createdAt: '2019-01-09 10:00:00',
        updatedAt: '2019-01-09 10:00:00',
        categoryId: 2,
        movieId : 1
      },], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('movies_categories', null, {});
  }
};
