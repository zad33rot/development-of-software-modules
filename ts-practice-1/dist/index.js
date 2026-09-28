"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("./library");
const books = [
    (0, library_1.createBook)("1984", "Джордж Оруэлл", 1949),
    (0, library_1.createBook)("Мастер и Маргарита", "Михаил Булгаков", 1967),
    (0, library_1.createBook)("Преступление и наказание", "Фёдор Достоевский", 1866),
];
books[0] = (0, library_1.markAsRead)(books[0]);
books[2] = (0, library_1.markAsRead)(books[2]);
books.forEach(book => console.log((0, library_1.getBookInfo)(book)));
console.log(`Прочитано книг: ${(0, library_1.countReadBooks)(books)}`);
