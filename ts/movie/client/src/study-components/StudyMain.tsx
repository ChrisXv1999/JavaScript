import React ,{createRef,forwardRef} from "react";
import ClassComponent from "./class/ClassComponent";
import { FunctionComponent } from "./function/FunctionComponent";
import Movie from "./movie/Movie";
import Todo from "./todo/Todo";
import { GlobalContextState,GlobalContext } from "../context/global";

const ForwardTodo = forwardRef(Todo);
export default class StudyMain extends React.Component {
    state= {
        globalState: GlobalContextState,
    }
    inputRef = createRef();

    render(): React.ReactNode {
        return (<GlobalContext.Provider value={this.state.globalState}>
            <Todo></Todo>
            {/* <div dangerouslySetInnerHTML={
                {__html: htmlStr}
            }></div> */}
            {[1,2,undefined,null,[],true,123]}
            <ForwardTodo ref={this.inputRef}></ForwardTodo>
            {/* <Movie></Movie> */}
            {/* <ClassComponent></ClassComponent> */}
            {/* <hr></hr> */}
            <FunctionComponent></FunctionComponent>
            </GlobalContext.Provider>
            )
    }
}