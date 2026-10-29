const sequelize = require('./db');
const Genre = require('./Genre');
const Movie = require('./Movie');

Genre.hasMany(Movie, { foreignKey: 'genreId' });
Movie.belongsTo(Genre, { foreignKey: 'genreId' });

module.exports = { sequelize, Genre, Movie };