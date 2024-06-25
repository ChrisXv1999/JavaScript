interface TodoInputProp{
    query: string,
    changeQuery: (query:string)=>void
}
export default function TodoInput(props:TodoInputProp){
    const changeQuery = (e:React.ChangeEvent)=>{
        props.changeQuery((e.target as HTMLInputElement).value)
    }
    return (<input className="todo-input" value={props.query} onChange={changeQuery}></input>)
}