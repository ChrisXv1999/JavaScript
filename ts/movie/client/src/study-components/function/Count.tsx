import { useEffect, useState } from "react"
import { GlobalContext, GlobalContextType } from "../../context/global";
import { UserContext, UserContextType, UserContextState } from "../../context/user";
export default function Count() {
    const [userContextState, setUserContextState] = useState<UserContextType>(UserContextState);
    function useCount(initialVal: number = 0) {
        const [count, setCount] = useState<number>(initialVal);
        function add() {
            setCount(count + 1)
        }
        return {
            add,
            count
        }
    }
    const { count, add } = useCount(0);
    const [count1, setCount1] = useState<number>(0);
    useEffect(() => {
        console.log(count);
        return () => {
            console.log('clear');
        }
    }, [count])
    return (<div>
        <GlobalContext.Consumer>
            {(context: GlobalContextType) => {
                return <div><p>AppName: {context.name}</p> <p>Version: {context.version}</p></div>
            }}
        </GlobalContext.Consumer>
        <UserContext.Provider value={userContextState}>
            <UserContext.Consumer>
                {(context: UserContextType) => {
                    return <div><p>UserName: {context.username}</p></div>
                }}
            </UserContext.Consumer>
        </UserContext.Provider>
        <span>{count}</span>
        <br></br>

        <button onClick={() => { add(); setCount1(count1 + 1) }}>+1</button>

    </div>)
}