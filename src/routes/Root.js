import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import "../css/root.css"

export default function App() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}