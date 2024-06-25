import { useState } from "react"
import withLog from "./HOC/withLog";
import Todo from "./todo/Todo"
// 使用 withLog 高阶组件包装  开头必须是大写字母
export function FunctionComponent() {
    return (
        <div>
          <Todo></Todo>
        </div>
    )
}