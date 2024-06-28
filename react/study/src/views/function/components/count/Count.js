import { useEffect, useState } from "react"
export default function Count( ) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect");
    }, [])
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}