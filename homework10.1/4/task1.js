const Book = require('./Book');
const EBook = require('./EBook');

// Створення екземплярів класу Book та EBook
const book1 = new Book('Війна і мир', 'Лев Толстой', 1869);
const book2 = new Book('1984', 'Джордж Орвелл', 1949);
const book3 = new Book('Брати Карамазови', 'Федір Достоєвський', 1880);
const eBook1 = new EBook('Гаррі Поттер і таємна кімната', 'Джоан Роулінг', 1998, 'PDF');
const eBook2 = new EBook('Сутінки', 'Стефені Маєр', 2005, 'EPUB');

// Масив книг
const books = [book1, book2, book3, eBook1, eBook2];

// Виклик статичного методу findOldestBook
const oldestBook = Book.findOldestBook(books);
oldestBook.printInfo(); // Виведе інформацію про найдавнішу книгу
