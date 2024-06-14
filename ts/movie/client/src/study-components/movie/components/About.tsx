import { NavLink, Outlet } from "react-router-dom"
export default function About(){
    return <>
        关于我们
        <br></br>
        <Outlet/>

        <NavLink to='email'>邮箱</NavLink>
        <NavLink to='phone'>电话</NavLink>
    </>
}