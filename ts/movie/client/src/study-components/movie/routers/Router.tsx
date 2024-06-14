import React from "react"
import { Navigate, useRoutes } from "react-router-dom"
import Home from "../components/Home"
import Detail from "../components/Detail"
import About from "../components/About"

function Email() {
    return <div>
        邮箱地址
    </div>
}
function Phone() {
    return <div>
        电话
    </div>
}

export default function Router() {
    return useRoutes([
        { path: '/home', element: <Home></Home> },
        { path: '/', element: <Navigate to='/home' replace></Navigate> },
        { path: '/detail/:id', element: <Detail></Detail>, },
        {
            path: '/about', element: <About></About>,
            children: [
                { path: 'phone', element: <Phone></Phone> },
                { path: 'email', element: <Email></Email> }
            ]
        }
    ])
}