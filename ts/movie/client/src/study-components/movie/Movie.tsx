import { Route, Routes, BrowserRouter,Navigate, NavLink } from "react-router-dom"
import Home from "./components/Home"
import Detail from "./components/Detail"
import About from "./components/About"
import Router from "./routers/Router"
import AddMovie from "./components/AddMovie"
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
export default function Movie() {
    return <BrowserRouter>
        <header className="flex">

            <NavLink to="home" >home</NavLink> 
            <NavLink to="about">about</NavLink>
        </header>
        <main>
            {/* <Router></Router> */}
            <Routes>
                <Route path="/home" element={<Home></Home>}>
                </Route>
                <Route path="/about" element={<About></About>}>
                    <Route path="phone" element={<Phone></Phone>}></Route>
                    <Route path="email" element={<Email></Email>}></Route>
                    <Route path="" element={<Navigate replace={true} to="email"></Navigate>}></Route>
                </Route>
                <Route path="/detail/:id" element={<Detail></Detail>}></Route>
                <Route path="/"  element={<Navigate replace={true} to="/home"></Navigate>}></Route>
            </Routes>
        </main>
    </BrowserRouter>
}