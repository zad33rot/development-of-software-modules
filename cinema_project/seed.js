const { sequelize, Genre, Movie } = require('./models');

async function seed() {
  await sequelize.sync({ force: true });

  const genres = await Genre.bulkCreate([
    { name: 'Комедия' },
    { name: 'Драма' },
    { name: 'Фантастика' },
    { name: 'Боевик' },
  ]);

  await Movie.bulkCreate([
    { title: 'Джентльмены',        year: 2019, genreId: genres[0].id },
    { title: 'Оппенгеймер',        year: 2023, genreId: genres[1].id },
    { title: 'Интерстеллар',       year: 2014, genreId: genres[2].id },
    { title: 'Дюна: Часть вторая', year: 2024, genreId: genres[2].id },
    { title: 'Джон Уик 4',         year: 2023, genreId: genres[3].id },
  ]);

  console.log('База заполнена');
  await sequelize.close();
}

seed();