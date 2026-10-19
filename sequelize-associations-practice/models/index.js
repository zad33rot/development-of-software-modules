const sequelize = require('../db');
const Author = require('./Author');
const Book = require('./Book');

// Связь 1:N: у автора много книг, книга принадлежит автору
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