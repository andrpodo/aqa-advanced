function divide(numerator, denominator) {
    // Валідації для випадків коли значення не є числами або denominator дорівнює 0
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Обидва аргументи мають бути числами!');
    }
    if (denominator === 0) {
        throw new Error('Ділення на нуль неможливе!');
    }
    // Повертаємо результат ділення
    return numerator / denominator;
}

// Виклик функції з різними значеннями, та обробка помилок
const values = [
    { num: 10, den: 2 },
    { num: 5, den: 0 },  // викличе помилку
    { num: '10', den: 2 },  // викличе помилку
    { num: 20, den: 4 }
];

values.forEach(pair => {
    try {
        const result = divide(pair.num, pair.den);
        console.log(`Результат ділення ${pair.num} на ${pair.den} = ${result}`);
    } catch (error) {
        console.error(`Сталася помилка: ${error.message}`);
    } finally {
        console.log('Робота завершена');
    }
});
