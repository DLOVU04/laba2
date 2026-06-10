export function findTopStudent(data) {
    if (data.length === 0) return null;
    let best = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i].score > best.score) best = data[i];
    }
    return best.name;
}

export function filterFailed(data, passScore = 60) {
    return data.filter(s => s.score < passScore).map(s => s.name);
}