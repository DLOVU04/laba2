import grades from './grades.js';
import { calculateAverage, addLetterGrade } from './teamlead.js';
import { findTopStudent, filterFailed } from './programmer.js';

console.log("Анализ успеваемости\n");

console.log(`Средний балл: ${calculateAverage(grades).toFixed(2)}`);
console.log(`Лучший студент: ${findTopStudent(grades)}`);

const debtors = filterFailed(grades, 60);
console.log(`Должники (<60): ${debtors.length ? debtors.join(", ") : "нет"}`);

console.log("\nБуквенные оценки:");
addLetterGrade(grades).forEach(s => console.log(`${s.name}: ${s.score} → ${s.letter}`));