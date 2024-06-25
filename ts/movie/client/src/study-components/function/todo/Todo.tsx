import { useEffect, useMemo, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { Task } from "./components/types";
import AddTodoItem from "./components/AddTodoItem";
import './index.css'
export default function Todo() {
    const [query, setQuery] = useState<string>('');
    const [todoList, setTodoList] = useState<Task[]>([{ name: '吃饭', isDone: false, deadline: +new Date('2024-06-25 19:00:00') }]);
    const displayList: Task[] = useMemo(() => {
        return todoList.filter(item => {
            return item.name.includes(query)
        })
    }, [query, todoList]);
    const updateList = (name: string, isDone: boolean) => {
        setTodoList(list => {
            return list.map(item => {
                if (item.name === name) {
                    return { ...item, isDone }
                }
                return item;
            })
        })
    }
    const addItem = (name: string) => {
        setTodoList(list => {
            return [...list, { name, isDone: false, deadline: +new Date() }]
        })
    }

    const deleteItem = (name: string) => {
        setTodoList(list => {
            return list.filter((item: Task) => {
                return item.name !== name;
            })
        })
    }
    return <div className="todo">
        <TodoInput query={query} changeQuery={setQuery}></TodoInput>
        <TodoList list={displayList} changeItemStatus={updateList} deleteItem={deleteItem}></TodoList>
        <AddTodoItem addItem={addItem}></AddTodoItem>
    </div>
}