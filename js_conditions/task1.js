function evaluateStudentPerformance(averageScore) {
    if (averageScore < 60) {
        console.log("Незадовільно");
    } else if (averageScore >= 60 && averageScore <= 70) {
        console.log("Задовільно");
    } else if (averageScore >= 71 && averageScore <= 80) {
        console.log("Добре");
    } else if (averageScore >= 81 && averageScore <= 90) {
        console.log("Дуже добре");
    } else if (averageScore >= 91 && averageScore <= 100) {
        console.log("Відмінно");
    } else {
        console.log("Неправильна оцінка");
    }
}

// Приклад виклику функції
evaluateStudentPerformance(77); // Виведе "Дуже добре"


//Якщо середня оцінка менше 60, вивести "Незадовільно".
//Якщо середня оцінка від 60 до 70 (включно), вивести "Задовільно".
//Якщо середня оцінка від 71 до 80 (включно), вивести "Добре".
//Якщо середня оцінка від 81 до 90 (включно), вивести "Дуже добре".
//Якщо середня оцінка від 91 до 100 (включно), вивести "Відмінно".
