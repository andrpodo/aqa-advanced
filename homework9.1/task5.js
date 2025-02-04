// Створення масиву об'єктів users
const users = [
    { name: 'Іван', email: 'ivan@example.com', age: 25 },
    { name: 'Марія', email: 'maria@example.com', age: 22 },
    { name: 'Петро', email: 'petro@example.com', age: 30 }
  ];
  
  // Використання циклу for...of для перебору елементів
  for (const user of users) {
    // Деструктуризація властивостей об'єкта user
    const { name, email, age } = user;
    // Виведення значень властивостей в консоль
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  }
  