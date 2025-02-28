const fetchInvalidUrl = require('./invalidUrl.js');

test('перевіряє обробку помилки при запиті на неправильну URL-адресу', async () => {
  try {
    await fetchInvalidUrl();
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('Запит на неправильну URL-адресу не вдався');
  }
});