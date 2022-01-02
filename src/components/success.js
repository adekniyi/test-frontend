import React from 'react'

export default function Success() {
    const totalScore = JSON.parse(localStorage.getItem("score"));

    return (
        <div>
            <h1>Congratulations!</h1>
            <h1>You score {totalScore}%</h1>
        </div>
    )
}
