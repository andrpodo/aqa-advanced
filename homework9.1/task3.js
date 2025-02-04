// Створення об'єкта car1
const car1 = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2015
  };
  
  // Створення об'єкта car2
  const car2 = {
    brand: 'Honda',
    model: 'Civic',
    owner: 'John Doe'
  };
  
  // Створення об'єкта car3 та об'єднання властивостей car1 та car2
  const car3 = {
    ...car1,
    ...car2
  };
  
  // Виведення об'єкта car3 в консоль
  console.log(car3);
  