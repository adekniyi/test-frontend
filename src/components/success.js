import React from 'react'

export default function Success() {
    const totalScore = JSON.parse(localStorage.getItem("score"));
    const name = JSON.parse(localStorage.getItem("name"));

    return (
        <div>
            <h1>Congratulations! {name}</h1>
            <h1>You score {totalScore}%</h1>
        </div>
    )
}
