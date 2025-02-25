const axios = require('axios')

// Запит 1: GET /todos/1
test("Test todos", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
    expect(response.status).toEqual(200); //asserting if the response code is 200
});

// Запит 2: GET /users/1
test("Test users", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log(response.data);
    expect(response.status).toEqual(200); //asserting if the response code is 200
});

// Запит 3: POST /posts
test("POST", async () => { 
  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
  console.log(response.data);
  expect(response.status).toEqual(201); //asserting if the response code is 201
});

// Запит 4: GET /posts/1
test("Test posts", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
    expect(response.status).toEqual(200); //asserting if the response code is 200
});

// Запит 5: POST /comments
test("newComment", async () => { const newComment = {
    postId: 1,
    name: 'test name',
    email: 'test@example.com',
    body: 'This is a test comment.'
  };
  const response = await axios.post('https://jsonplaceholder.typicode.com/comments', newComment);
  console.log(response.data);
  expect(response.status).toEqual(201); //asserting if the response code is 201
});