import React from "react";
import ClassComponent from "./class/ClassComponent";
import { FunctionComponent } from "./function/FunctionComponent";
import Movie from "./movie/Movie";
import Todo from "./todo/Todo";
import { GlobalContextState,GlobalContext } from "../context/global";

export default class StudyMain extends React.Component {
    state= {
        globalState: GlobalContextState,
    }
    render(): React.ReactNode {
        return (<GlobalContext.Provider value={this.state.globalState}>
            <Todo></Todo>
            {/* <Movie></Movie> */}
            {/* <ClassComponent></ClassComponent> */}
            {/* <hr></hr> */}
            <FunctionComponent></FunctionComponent>
            </GlobalContext.Provider>
        )
    }
}