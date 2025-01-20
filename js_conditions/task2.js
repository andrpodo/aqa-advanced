function evaluateStudentPerformance(averageScore) {
    switch (true) {
        case (averageScore < 60):
            console.log("Незадовільно");
            break;
        case (averageScore >= 60 && averageScore <= 70):
            console.log("Задовільно");
            break;
        case (averageScore >= 71 && averageScore <= 80):
            console.log("Добре");
            break;
        case (averageScore >= 81 && averageScore <= 90):
            console.log("Дуже добре");
            break;
        case (averageScore >= 91 && averageScore <= 100):
            console.log("Відмінно");
            break;
        default:
            console.log("Неправильна оцінка");
    }
}

// Приклад виклику функції
evaluateStudentPerformance(85); // Виведе "Дуже добре"