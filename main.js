// grades.js (или в начале main.js)
const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// calculateAverage.js
function calculateAverage(data) {
    if (!data || data.length === 0) return 0;
    const sum = data.reduce((total, student) => total + student.score, 0);
    return sum / data.length;
}

// findTopStudent.js
function findTopStudent(data) {
    if (!data || data.length === 0) return null;
    const top = data.reduce((best, current) =>
        current.score > best.score ? current : best
    );
    return top.name;
}

// filterFailed.js
function filterFailed(data, passScore = 60) {
    return data.filter(student => student.score < passScore)
               .map(student => student.name);
}