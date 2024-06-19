import React ,{createRef,forwardRef} from "react";
import ClassComponent from "./class/ClassComponent";
import { FunctionComponent } from "./function/FunctionComponent";
import Movie from "./movie/Movie";
import Todo from "./todo/Todo";
const ForwardTodo = forwardRef(Todo);
export default class StudyMain extends React.Component {
    inputRef = createRef();
    render(): React.ReactNode {
        const htmlStr = '<h1>123</h1>'
        return (<div>
            <div dangerouslySetInnerHTML={
                {__html: htmlStr}
            }></div>
            {[1,2,undefined,null,[],true,123]}
            <ForwardTodo ref={this.inputRef}></ForwardTodo>
            {/* <Movie></Movie> */}
            {/* <ClassComponent></ClassComponent>
            <hr></hr>
            <FunctionComponent></FunctionComponent> */}
            </div>
        )
    }
}