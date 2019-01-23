'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    category: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    categories.belongsToMany(models.movies, {
      through : "movies_categories",
    })
  };
  return categories;
};