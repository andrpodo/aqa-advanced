class Book {
    constructor(title, author, year) {
      this._title = title;
      this._author = author;
      this._year = year;
    }
  
    // Геттери
    get title() {
      return this._title;
    }
  
    get author() {
      return this._author;
    }
  
    get year() {
      return this._year;
    }
  
    // Сеттери з валідацією
    set title(value) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Назва повинна бути непорожнім рядком');
      }
      this._title = value;
    }
  
    set author(value) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Автор повинен бути непорожнім рядком');
      }
      this._author = value;
    }
  
    set year(value) {
      if (typeof value !== 'number' || value <= 0) {
        throw new Error('Рік видання повинен бути додатним числом');
      }
      this._year = value;
    }
  
    // Метод для виведення повного опису книги
    printInfo() {
      console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
    }
  
    // Статичний метод для знаходження найдавнішої книги
    static findOldestBook(books) {
      if (books.length === 0) {
        throw new Error('Масив книг не може бути порожнім');
      }
      return books.reduce((oldest, current) => {
        return (current.year < oldest.year) ? current : oldest;
      });
    }
  }
  
  module.exports = Book;
  