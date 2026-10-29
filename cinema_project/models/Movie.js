const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  genreId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { tableName: 'movies', timestamps: false });

module.exports = Movie;