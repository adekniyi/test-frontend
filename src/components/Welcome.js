import React from 'react'
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div className="welcome-container">
            <p>Hello, Femi Akinwale, Welcome to Ninco
online test. Are you sure you are ready for 
this test, if yes then you’re good to go.</p>
<p>Click on the arrow to get started</p>
<Link to='/quiz'>
<button
                type='button'
                >Let’s get started</button>
                 </Link>
        </div>
    )
}
