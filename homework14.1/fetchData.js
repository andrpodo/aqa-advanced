const axios = require('axios');

async function fetchData() {
  const config = {
    headers: {
      'Custom-Header': 'HeaderValue'
    },
    params: {
      userId: 1
    }
  };

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', config);
    return response.data;
  } catch (error) {
    throw new Error('Запит не вдався');
  }
}

module.exports = fetchData;
