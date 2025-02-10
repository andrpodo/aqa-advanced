const Book = require('./Book');
const EBook = require('./EBook');

// Створення екземпляра класу Book
const book1 = new Book('Війна і мир', 'Лев Толстой', 1869);

// Виклик статичного методу для створення екземпляра класу EBook
const eBookFromBook = EBook.fromBook(book1, 'PDF');

// Виклик методу printInfo для новоствореного екземпляра EBook
eBookFromBook.printInfo();
