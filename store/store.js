import {useState} from "react";

export let quizScore = 0

export function setQuizScore(isCorrectAnswer) {
    // const [quizScore, serQuizScore] = useState(0)
    if (isCorrectAnswer) {
        quizScore += 1
    }
}
