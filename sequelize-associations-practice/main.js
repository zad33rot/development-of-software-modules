const { sequelize, Author, Book } = require('./models');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Соединение с SQLite установлено.');

    await sequelize.sync({ force: true });
    console.log('Таблицы созданы заново.');

    // Создаём родителя
    const author = await Author.create({
      name: 'Лев Толстой',
      country: 'Россия',
    });
    console.log('Создан автор:', author.toJSON());

    // Специальный метод createBook, появившийся благодаря hasMany + as: 'books'
    const book1 = await author.createBook({
      title: 'Война и мир',
      year: 1869,
      genre: 'Роман',
    });
    console.log('Книга создана через author.createBook:', book1.toJSON());

    // Создаём ещё книги напрямую, указывая внешний ключ authorId
    await Book.create({
      title: 'Анна Каренина',
      year: 1877,
      genre: 'Роман',
      authorId: author.id,
    });

    await Book.create({
      title: 'Воскресение',
      year: 1899,
      genre: 'Роман',
      authorId: author.id,
    });

    // Специальный метод countBooks
    const booksCount = await author.countBooks();
    console.log('Количество книг автора:', booksCount);

    // Жадная загрузка: автор вместе с книгами
    const authorWithBooks = await Author.findByPk(author.id, {
      include: [
        {
          model: Book,
          as: 'books',
        },
      ],
    });

    console.log('Автор с книгами:');
    console.log(JSON.stringify(authorWithBooks, null, 2));

    // Жадная загрузка в обратную сторону: книга вместе с автором
    const bookWithAuthor = await Book.findOne({
      where: { title: 'Анна Каренина' },
      include: [
        {
          model: Author,
          as: 'author',
        },
      ],
    });

    console.log('Книга с автором:');
    console.log(JSON.stringify(bookWithAuthor, null, 2));
  } catch (error) {
    console.error('Ошибка выполнения:', error);
  } finally {
    await sequelize.close();
    console.log('Соединение закрыто.');
  }
}

main();