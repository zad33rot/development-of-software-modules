const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Genre = sequelize.define(
  'Genre',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { tableName: 'genres', timestamps: false }
);

module.exports = Genre;