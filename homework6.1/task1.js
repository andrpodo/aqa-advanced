// Function Declaration:
function calculateArea(width, height) {
    return width * height;
}

console.log(calculateArea(5, 10)); // Виведе 50

// Function Expression:
const calculateArea = function(width, height) {
    return width * height;
};

console.log(calculateArea(5, 10)); // Виведе 50

//Arrow Function:
const calculateArea = (width, height) => {
    return width * height;
};

console.log(calculateArea(5, 10)); // Виведе 50