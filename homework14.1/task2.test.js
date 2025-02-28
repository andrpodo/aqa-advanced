const axios = require('axios');
const fetchData = require('./fetchData');

jest.mock('axios');

test('перевіряє, що заголовки та параметри правильно включені в запит', async () => {
  const mockResponse = { data: [{ id: 1, title: 'test post' }] };
  axios.get.mockResolvedValue(mockResponse);

  const result = await fetchData();

  expect(result).toEqual(mockResponse.data);
  expect(axios.get).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/posts',
    expect.objectContaining({
      headers: { 'Custom-Header': 'HeaderValue' },
      params: { userId: 1 }
    })
  );
});
