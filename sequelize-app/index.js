const sequelize = require('./db');
const Car = require('./models/car');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Подключение к SQLite установлено');

    await sequelize.sync({ force: true });
    console.log('Таблица cars создана');

    const cars = await Car.bulkCreate([
      { brand: 'Toyota', model: 'Camry', year: 2020, price: 25000 },
      { brand: 'BMW',    model: 'X5',    year: 2022, price: 60000 },
      { brand: 'Audi',   model: 'A4',    year: 2019, price: 30000 },
    ]);
    console.log(`Добавлено машин: ${cars.length}`);

    const allCars = await Car.findAll();
    console.log('\n Список машин:');
    console.log(JSON.stringify(allCars, null, 2));

  } catch (err) {
    console.error('Ошибка:', err);
  } finally {
    await sequelize.close();
  }
}

main();