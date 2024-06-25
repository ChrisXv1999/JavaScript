import { useCallback } from "react"
import { Task } from "../types"
interface TodoListProps { 
    list: Task[], 
    changeItemStatus: (name: string, isDone: boolean) => void, 
    deleteItem: (name: string) => void 
}
export default function TodoList(props: TodoListProps) {
    const changeChecked = useCallback((e: React.ChangeEvent<HTMLInputElement>, item: Task) => {
        props.changeItemStatus(item.name, e.target.checked)
    }, [])
    return <ul className="todo-list">
        {props.list.map((item) => {
            return <li key={item.name}><input type="checkbox" checked={item.isDone} onChange={(e) => changeChecked(e, item)} />{item.name}<button onClick={()=>props.deleteItem(item.name)}>删除</button> </li>
        })}
    </ul>
}