// Функція для запиту до серверу та отримання об'єкту todo
function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка при отриманні todo');
        }
        return response.json();
      })
  }
  
  // Функція для запиту до серверу та отримання об'єкту user
  function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка при отриманні user');
        }
        return response.json();
      })
  }
  
  // Використання Promise.all для отримання результатів обох запитів
  Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
      const [todo, user] = results;
      console.log('Todo:', todo);
      console.log('User:', user);
    })
    .catch(error => {
      console.error('Promise.all помилка:', error);
    });
  
  // Використання Promise.race для отримання першого завершеного результату з обох запитів
  Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
      console.log('Перший результат:', result);
    })
    .catch(error => {
      console.error('Promise.race помилка:', error);
    });
  