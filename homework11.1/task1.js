function delayedMessage(text, delay) {
    setTimeout(() => {
      console.log(text);
    }, delay);
  }
  
  // Приклад використання
  delayedMessage('Привіт, світ!', 2000); // Виведе "Привіт, світ!" через 2 секунди
  delayedMessage('Це повідомлення з затримкою', 5000); // Виведе "Це повідомлення з затримкою" через 5 секунд
  