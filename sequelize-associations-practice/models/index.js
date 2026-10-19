const sequelize = require('../db');
const Author = require('./Author');
const Book = require('./Book');

Author.hasMany(Book, {
  foreignKey: 'authorId',
  as: 'books',
  onDelete: 'CASCADE',
});

Book.belongsTo(Author, {
  foreignKey: 'authorId',
  as: 'author',
});

module.exports = { sequelize, Author, Book };