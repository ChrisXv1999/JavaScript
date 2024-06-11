import { useEffect, useState } from "react"

export default function Count(){
    function useCount(initialVal:number = 0){
        const [count,setCount] = useState<number>(initialVal); 
        function add(){
            setCount(count+1)
        }
        return {
            add,
            count
        }
    }
    const {count,add} = useCount(0); 
    const [count1,setCount1] = useState<number>(0);
    useEffect(()=>{
        console.log(count);
        return ()=>{
            console.log('clear'); 
        }
    },[count])
    return (<div>
        <span>{count}</span>
        <br></br>
        <button onClick={()=>{add();setCount1(count1+1)}}>+1</button>

    </div>)
}