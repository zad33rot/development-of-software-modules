# Практическая работа №1.2 — Связи таблиц в Sequelize

## Предметная область

Выбран вариант **A: Author — Book**.

Связь: **один-ко-многим (1:N)**.  
Один автор может иметь много книг, но каждая книга принадлежит только одному автору.

Модели:

- `Author`: `name`, `country`;
- `Book`: `title`, `year`, `genre`.

Ассоциация описана парой:

- `Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' })`
- `Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' })`

Внешний ключ `authorId` создаётся в таблице `books`.

## Что демонстрирует работа

- подключение Sequelize к SQLite;
- описание двух моделей;
- парную ассоциацию `hasMany` + `belongsTo`;
- явное указание `foreignKey` и псевдонимов `as`;
- `sequelize.sync({ force: true })`;
- создание связанных записей;
- специальные методы экземпляра: `author.createBook(...)`, `author.countBooks()`;
- жадную загрузку через `include` с псевдонимами `as`;
- вывод связанных данных в консоль;
- закрытие соединения через `sequelize.close()` в `finally`.

## Установка и запуск

```bash
npm install
npm start