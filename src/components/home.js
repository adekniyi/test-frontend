import React, { useState } from 'react'
import SubHome from "./SubHome"
import HomeLogin from "./HomeLogin"
import Welcome from "./Welcome"

export default function Home() {
    const [count, setCount] = useState(1);
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
        </>
    )
}
