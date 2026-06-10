export function calculateAverage(data) {
    if (data.length === 0) return 0;
    const sum = data.reduce((acc, s) => acc + s.score, 0);
    return sum / data.length;
}

export function addLetterGrade(data) {
    return data.map(s => {
        let letter;
        if (s.score >= 90) letter = "A";
        else if (s.score >= 75) letter = "B";
        else letter = "C";
        return { ...s, letter };
    });
}