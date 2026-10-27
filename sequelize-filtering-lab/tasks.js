const { Op } = require('sequelize');
const {
  User,
  Post,
  Author,
  Book,
  Student,
  Course,
  Order,
  Item,
} = require('./models');

// Задание 1.
// where внутри include фильтрует Post.publishedAt — поле связанной модели.
// required: true превращает LEFT JOIN в INNER JOIN: пользователи без подходящих постов не попадают.
// order: сначала User.name ASC, затем вложенный массив для Post.publishedAt DESC.
async function getUsersWithRecentPosts() {
  return User.findAll({
    include: [
      {
        model: Post,
        as: 'posts',
        where: { publishedAt: { [Op.gt]: '2023-01-01' } },
        required: true,
      },
    ],
    order: [
      ['name', 'ASC'],
      [{ model: Post, as: 'posts' }, 'publishedAt', 'DESC'],
    ],
  });
}

// Задание 2.
// required: false сохраняет LEFT OUTER JOIN — авторы без книг остаются в результате.
// order по полю родительской модели Author.lastName.
async function getAllAuthorsIncludingEmpty() {
  return Author.findAll({
    include: [
      {
        model: Book,
        as: 'books',
        required: false,
      },
    ],
    order: [['lastName', 'ASC']],
  });
}

// Задание 3.
// N:M через Enrollment. where внутри include фильтрует Course.credits.
// required: true отсеивает студентов без курсов с credits > 3.
// through: { attributes: [] } убирает поля Enrollment из вывода.
// order: студенты по name ASC, курсы по title ASC.
async function getStudentsInAdvancedCourses() {
  return Student.findAll({
    include: [
      {
        model: Course,
        as: 'courses',
        where: { credits: { [Op.gt]: 3 } },
        required: true,
        through: { attributes: [] },
      },
    ],
    order: [
      ['name', 'ASC'],
      [{ model: Course, as: 'courses' }, 'title', 'ASC'],
    ],
  });
}

// Задание 4.
// where внутри include фильтрует Item.quantity.
// required: true — только заказы, где есть хотя бы один товар с quantity > 2.
// order: заказы по createdAt DESC, товары внутри заказа по price DESC.
async function getOrdersWithBulkItems() {
  return Order.findAll({
    include: [
      {
        model: Item,
        as: 'items',
        where: { quantity: { [Op.gt]: 2 } },
        required: true,
      },
    ],
    order: [
      ['createdAt', 'DESC'],
      [{ model: Item, as: 'items' }, 'price', 'DESC'],
    ],
  });
}

// Задание 5.
// Верхнеуровневый where фильтрует родителя User.isActive.
// Вложенный where фильтрует Post.status.
// required: true — только пользователи с хотя бы одним published-постом.
// order: User.name ASC, Post.createdAt DESC.
async function getActiveUsersWithPublishedPosts() {
  return User.findAll({
    where: { isActive: true },
    include: [
      {
        model: Post,
        as: 'posts',
        where: { status: 'published' },
        required: true,
      },
    ],
    order: [
      ['name', 'ASC'],
      [{ model: Post, as: 'posts' }, 'createdAt', 'DESC'],
    ],
  });
}

module.exports = {
  getUsersWithRecentPosts,
  getAllAuthorsIncludingEmpty,
  getStudentsInAdvancedCourses,
  getOrdersWithBulkItems,
  getActiveUsersWithPublishedPosts,
};