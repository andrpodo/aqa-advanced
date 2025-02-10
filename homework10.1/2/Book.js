// Створення класу Book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Метод для виведення повного опису книги
  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
  }
}

// Експортуємо клас для використання в інших файлах
module.exports = Book;
