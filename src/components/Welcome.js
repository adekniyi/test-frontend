import React from 'react'
import { Link } from 'react-router-dom';
import welcomeimg from '../images/image 2.png';

export default function Welcome() {
    const quizId = JSON.parse(localStorage.getItem("quizId"));
    const name = JSON.parse(localStorage.getItem("name"));
    const quizRoute = `/quiz/${quizId}`
    return (
        <div className="welcome-container">
            <div className="welcome-image">
            <img src={welcomeimg} alt="subhome"/>
            </div>
            <div className="welcome-content">
                <div className="welcome-subcontent">
                    <p>Hello, {name}, Welcome to Ninco
        online test. Are you sure you are ready for 
        this test, if yes then you’re good to go.</p>
        <p>Click on the arrow to get started</p>
        <div className="subhome-btn">
        <Link to={quizRoute}>
        <button
                        type='button'
                        >{">"} </button>
                        </Link>
                </div>

            </div>
            </div>
        </div>
    )
}
