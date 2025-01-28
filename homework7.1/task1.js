// Функція для обробки числа
function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback(number); // Передаємо значення в колбек
    } else {
        oddCallback(number); // Передаємо значення в колбек
    }
}

// Колбек функція для парного числа
function handleEven(number) {
    console.log(`${number} is even`);
}

// Колбек функція для непарного числа
function handleOdd(number) {
    console.log(`${number} is odd`);
}

// Виклик функції з довільним числом та колбеками
handleNum(5, handleEven, handleOdd); // Виведе "5 is odd"
handleNum(10, handleEven, handleOdd); // Виведе "10 is even"
