import React, { useState } from 'react'
import SubHome from "./SubHome"
import HomeLogin from "./HomeLogin"
import Welcome from "./Welcome"
import { useParams } from "react-router-dom";


export default function Home() {
    const [count, setCount] = useState(1);
    const params = useParams();
    
    localStorage.setItem("quizId", JSON.stringify(params.quiz_id));
    return (
        <>
            {count === 1 ? (
                <>
                <SubHome count={count} setCount={setCount}/>
                </>
            ) : null}
            {count === 2 ? (
                <>
                <HomeLogin count={count} setCount={setCount}/>
                </>
            ) : null}
            {count === 3 ? (
                <>
                <Welcome/>
                </>
            ) : null}

            {console.log(params.quiz_id)}
        </>
    )
}
