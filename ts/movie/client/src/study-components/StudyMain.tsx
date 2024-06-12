import React from "react";
import ClassComponent from "./class/ClassComponent";
import { FunctionComponent } from "./function/FunctionComponent";
import Movie from "./movie/Movie";
export default class StudyMain extends React.Component {
    
    render(): React.ReactNode {
        return (<div>
            <Movie></Movie>
            {/* <ClassComponent></ClassComponent>
            <hr></hr>
            <FunctionComponent></FunctionComponent> */}
            </div>
        )
    }
}