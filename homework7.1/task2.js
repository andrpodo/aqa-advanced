function countdown(num) {
    // Виводимо значення num в консоль
    console.log(num);
    
    // Умови для рекурсивного виклику функції
    if (num > 0) {
      countdown(num - 1);
    }
  }
  
  // Викликаємо функцію з аргументом 5
  countdown(5);
  