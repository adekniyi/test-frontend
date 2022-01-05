import React from 'react'
import { Link } from 'react-router-dom';
import welcomeing from '../images/image 2.png';

export default function Welcome() {
    return (
        <div className="welcome-container">
            <div className="welcome-image">
            <img src={welcomeing} alt="subhome"/>
            </div>
            <div className="welcome-content">
                <div className="welcome-subcontent">
                    <p>Hello, Femi Akinwale, Welcome to Ninco
        online test. Are you sure you are ready for 
        this test, if yes then you’re good to go.</p>
        <p>Click on the arrow to get started</p>
        <div className="subhome-btn">
        <Link to='/quiz'>
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
