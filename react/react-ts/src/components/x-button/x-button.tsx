interface XButtonProps {
    children:string,
    onClick:()=>void,
}
export default function XButton(props:XButtonProps){
    return (
        <div className="x-button" onClick={props.onClick}>
            <span className="x-button-label">{props.children}</span>
        </div>
    )
}