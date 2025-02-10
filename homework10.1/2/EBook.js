// Імпорт основного класу Book
const Book = require('./Book');

// Створення класу EBook, який успадковує властивості та методи класу Book
class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  // Метод для виведення повного опису електронної книги
  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
  }
}

// Експортуємо клас для використання в інших файлах
module.exports = EBook;
