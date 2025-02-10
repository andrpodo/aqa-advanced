// Імпорт класу EBook
const EBook = require('./EBook');

// Створення інстансу (екземпляру) класу EBook
const myEBook = new EBook('Гаррі Поттер і таємна кімната', 'Джоан Роулінг', 1998, 'PDF');

// Виклик методу printInfo
myEBook.printInfo();
