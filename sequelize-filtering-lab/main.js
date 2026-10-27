const seed = require('./seed');
const { sequelize } = require('./models');
const {
  getUsersWithRecentPosts,
  getAllAuthorsIncludingEmpty,
  getStudentsInAdvancedCourses,
  getOrdersWithBulkItems,
  getActiveUsersWithPublishedPosts,
} = require('./tasks');

async function main() {
  await seed();

  console.log('\n=== Задание 1: пользователи с постами после 2023-01-01 ===');
  console.log(JSON.stringify(await getUsersWithRecentPosts(), null, 2));

  console.log('\n=== Задание 2: все авторы, включая без книг ===');
  console.log(JSON.stringify(await getAllAuthorsIncludingEmpty(), null, 2));

  console.log('\n=== Задание 3: студенты с курсами credits > 3 ===');
  console.log(JSON.stringify(await getStudentsInAdvancedCourses(), null, 2));

  console.log('\n=== Задание 4: заказы с товарами quantity > 2 ===');
  console.log(JSON.stringify(await getOrdersWithBulkItems(), null, 2));

  console.log('\n=== Задание 5: активные пользователи с published-постами ===');
  console.log(JSON.stringify(await getActiveUsersWithPublishedPosts(), null, 2));

  await sequelize.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});