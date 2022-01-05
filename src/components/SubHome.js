import React from 'react'
import subhomeing from '../images/image 1.png';

export default function SubHome(props) {
    return (
        <div className="subhome-container">
            <div className="left-subhome">
              <img src={subhomeing} alt="subhome"/>
            </div>
            <div className="right-subhome">
              <div className="right-subhome-div">
              <h1>Welcome to Ninco Online Test.</h1>
                <p>Ninco is an Online platform where you test your ability and checking how prepared you are for your upcoming exams.</p>
                <div className="subhome-btn">
                <button
                onClick={() => props.setCount(props.count + 1)}
                type='button'
                >Let’s get started</button>
                </div>
              </div>
            </div>
        </div>
    )
}
