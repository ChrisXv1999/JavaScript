import { useState, useEffect,useMemo } from "react";
import useCount from "../hooks/useCount";
import Counter from './Counter.jsx'
import request from "../api/request";
export default function home(props) {
    /*eslint-disable */
    const [list, setList] = useState([]);
    const [query, setQuery] = useState('');
    function changeQuery(e) {
        setQuery(e.target.value)
    }
    useEffect(() => {
        // request('students').then(({ data }) => {
        //     setList(data);
        // })
        console.log('emit');
    }, [])
    function editUser(detail) {
        console.log(detail)
    }
    let {count,setCount}= useCount(0);
    const double = useMemo(()=>count*2,[count])

    function addCount(){
        setCount(++count)
    }
    return (
        <div>
            <h3 >用户列表</h3>{double}
            <Counter count={count} triggerChange={addCount}></Counter>
            <input type="text" value={query} onChange={changeQuery}></input>
            <table>
                <thead><tr><th><span>姓名</span></th><th><span>年龄</span></th><th><span>操作</span></th></tr></thead>
                <tbody>
                    {list.filter(({ name }) => name.includes(query)).map(({ name, age }, idx) => {
                        return (<tr key={idx}><td>{name}</td><td>{age}</td><td onClick={()=>editUser({name,age})}>详情</td></tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}