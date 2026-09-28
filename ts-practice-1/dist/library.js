"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = createBook;
exports.markAsRead = markAsRead;
exports.getBookInfo = getBookInfo;
exports.countReadBooks = countReadBooks;
function createBook(title, author, year) {
    return { title, author, year, isRead: false };
}
function markAsRead(book) {
    return { ...book, isRead: true };
}
function getBookInfo(book) {
    const status = book.isRead ? "прочитана" : "не прочитана";
    return `«${book.title}», ${book.author}, ${book.year} — ${status}`;
}
function countReadBooks(books) {
    return books.filter(book => book.isRead).length;
}
