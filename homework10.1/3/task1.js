const EBook = require('./EBook');

const myEBook = new EBook('Гаррі Поттер і таємна кімната', 'Джоан Роулінг', 1998, 'PDF');
myEBook.printInfo(); // Викликаємо метод printInfo

// Використання геттерів та сеттерів
console.log(myEBook.title); // Виведе: Гаррі Поттер і таємна кімната
myEBook.title = 'Гаррі Поттер і в‘язень Азкабану'; // Змінюємо назву через сеттер
console.log(myEBook.title); // Виведе: Гаррі Поттер і в'язень Азкабану

myEBook.printInfo(); // Виведе оновлену інформацію
