'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    director: DataTypes.STRING,
    release_date: DataTypes.STRING
  }, {});
  movies.associate = function(models) {
    movies.belongsToMany(models.categories, {
      through : "movies_categories",
    })
  };
  return movies;
};