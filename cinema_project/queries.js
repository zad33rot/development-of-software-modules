const { Op } = require('sequelize');
const { sequelize, Genre, Movie } = require('./models');

async function main() {
  await sequelize.sync();

  const movies = await Movie.findAll({ include: Genre });
  console.log('1) Все фильмы:');
  movies.forEach((m) => {
    console.log(m.title, '-', m.Genre.name);
  });

  const movie = await Movie.findByPk(1, { include: Genre });
  console.log('\n2) Фильм по id = 1:');
  console.log(movie.title, '-', movie.Genre.name);

  const newMovies = await Movie.findAll({
    where: { year: { [Op.gt]: 2020 } },
  });
  console.log('\n3) Фильмы после 2020:');
  newMovies.forEach((m) => console.log(m.title, m.year));

  const scifi = await Movie.findAll({
    include: {
      model: Genre,
      where: { name: 'Фантастика' },
    },
  });
  console.log('\n4) Фильмы жанра «Фантастика»:');
  scifi.forEach((m) => console.log(m.title));

  const created = await Movie.create({
    title: 'Барби',
    year: 2023,
    genreId: 1,
  });
  console.log('\n5) Добавлен фильм:', created.title);

  const genres = await Genre.findAll();
  console.log('\n6) Все жанры:');
  genres.forEach((g) => console.log(g.name));

  await sequelize.close();
}

main();