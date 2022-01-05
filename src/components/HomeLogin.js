import React,{useState} from 'react'

export default function HomeLogin(props) {
    const [data, setDate] = useState("");

    const handleChange = (e) => {
        setDate(e.target.value);
        console.log(e.target.value);
      }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
        localStorage.setItem('name',JSON.stringify(data))
        props.setCount(props.count + 1)
      }
    return (
        <div>
            <div className="home-input-container">
                <h5>Input your Name to start with us</h5>
                <input 
                value={data} onChange={handleChange}
                 type="text" placeholder="Enter your name"/>
                 <div className="subhome-btn">
                <button
                //onClick={() => props.setCount(props.count + 1)}
                onClick={handleSubmit}
                type='button'
                >Let’s get started</button>
                </div>
            </div>
        </div>
    )
}
