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

// Створення кількох об'єктів класу Book
const book1 = new Book('Війна і мир', 'Лев Толстой', 1869);
const book2 = new Book('1984', 'Джордж Орвелл', 1949);
const book3 = new Book('Гаррі Поттер і філософський камінь', 'Джоан Роулінг', 1997);

// Виклик методу printInfo для кожного екземпляру
book1.printInfo(); 
book2.printInfo();
book3.printInfo();
