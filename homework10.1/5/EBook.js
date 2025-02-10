const Book = require('./Book');

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  // Геттери
  get fileFormat() {
    return this._fileFormat;
  }

  // Сеттери з валідацією
  set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Формат файлу повинен бути непорожнім рядком');
    }
    this._fileFormat = value;
  }

  // Метод для виведення повного опису електронної книги
  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
  }

  // Статичний метод для створення екземпляра класу EBook
  static fromBook(bookInstance, fileFormat) {
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}

module.exports = EBook;
