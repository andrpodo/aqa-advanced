const axios = require('axios');
const fetchData = require('./fetchData2.js');

jest.mock('axios');

describe('fetchData', () => {
  it('імітуює успішний HTTP-запит', async () => {
    const mockData = { id: 1, title: 'test post' };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
  });

  it('імітуює невдалий HTTP-запит', async () => {
    axios.get.mockRejectedValue(new Error('Запит не вдався'));

    await expect(fetchData('https://jsonplaceholder.typicode.com/invalid-url')).rejects.toThrow('Запит не вдався');
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/invalid-url');
  });
});
