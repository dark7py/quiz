export let quizScore = 0

export function setQuizScore(isCorrectAnswer) {
    if (isCorrectAnswer) {
        quizScore += 1
    }
}

export function resetQuizScore() {
    quizScore = 0;
}
