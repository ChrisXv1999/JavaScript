import React from "react";
import ClassComponent from "./class/ClassComponent";
import { FunctionComponent } from "./function/FunctionComponent";
export default class StudyMain extends React.Component {
    render(): React.ReactNode {
        return (<div>
            <ClassComponent></ClassComponent>
            <hr></hr>
            <FunctionComponent></FunctionComponent>
            </div>
        )
    }
}