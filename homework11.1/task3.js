// Функція для запиту до серверу та отримання об'єкту todo за допомогою async/await
async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Помилка при отриманні todo');
      }
      const todo = await response.json();
      return todo;
    } catch (error) {
      console.error('fetchTodo помилка:', error);
      throw error;
    }
  }
  
  // Функція для запиту до серверу та отримання об'єкту user за допомогою async/await
  async function fetchUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error('Помилка при отриманні user');
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('fetchUser помилка:', error);
      throw error;
    }
  }
  
  (async () => {
    try {
      // Використання Promise.all для отримання результатів обох запитів
      const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
      console.log('Todo:', todo);
      console.log('User:', user);
    } catch (error) {
      console.error('Promise.all помилка:', error);
    }
  
    try {
      // Використання Promise.race для отримання першого завершеного результату з обох запитів
      const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
      console.log('Перший результат:', firstResult);
    } catch (error) {
      console.error('Promise.race помилка:', error);
    }
  })();
  