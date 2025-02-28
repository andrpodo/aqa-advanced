const axios = require('axios');

async function fetchInvalidUrl() {
  try {
    const response = await axios.get('https://invalid.url/api/data');
    return response.data;
  } catch (error) {
    throw new Error('Запит на неправильну URL-адресу не вдався');
  }
}

module.exports = fetchInvalidUrl;
