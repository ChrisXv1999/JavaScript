import { useCallback, useState } from "react"

export default function AddTodoItem(props:{addItem:(name:string)=>void}){
    const [taskName,setTaskName] = useState<string>('')
    const addItem = useCallback(()=>{
        props.addItem(taskName);
        setTaskName('');
    },[taskName])
    return <div className="todo-add">
        <input type="text" placeholder="请输入待办事项"  value={taskName} onChange={(e)=>setTaskName(e.target.value)} className="todo-input"/>
        <button onClick={addItem}>添加</button>
    </div>
}