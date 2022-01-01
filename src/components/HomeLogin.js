import React from 'react'

export default function HomeLogin(props) {
    return (
        <div>
            <div className="home-input-container">
                <h5>Input your Name to start with us</h5>
                <input type="text" placeholder="Enter your name"/>
                <button
                onClick={() => props.setCount(props.count + 1)}
                type='button'
                >Let’s get started</button>
            </div>
        </div>
    )
}
