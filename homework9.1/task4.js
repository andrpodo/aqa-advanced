// Створення об'єкта person
const person = {
    firstName: 'Олександр',
    lastName: 'Коваленко',
    age: 30
  };
  
  // Додавання властивості email
  person.email = 'oleksandr.kovalenko@example.com';
  
  // Видалення властивості age
  delete person.age;
  
  // Виведення оновленого об'єкта person в консоль
  console.log(person);
  