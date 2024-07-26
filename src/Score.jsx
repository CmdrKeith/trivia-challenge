import { useState } from "react"

export default function KeepScore(correctAnswer) {
    const [score, setScore] = useState(5)
    if (correctAnswer) {
        setScore(score + 1)
    }

    return (
        <h4>Score from Score = {score}</h4>
    )
}