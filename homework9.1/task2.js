// Створення об'єкта book
const book = {
    title: 'Енеїда',
    author: 'Іван Котляревський',
    year: 1842
  };
  
  // Деструктуризація назви та автора книги з об'єкта book
  const { title, author } = book;
  
  // Виведення деструктуризованих змінних в консоль
  console.log(`Назва книги: ${title}`);
  console.log(`Автор книги: ${author}`);
  