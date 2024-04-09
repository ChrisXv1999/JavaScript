import { useState } from "react";
function useCount(initValue = 0){
    const [count,setCount] = useState(initValue)
    return {
        count,
        setCount
    }
}
export default useCount