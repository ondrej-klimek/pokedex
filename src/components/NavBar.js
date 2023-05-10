import {Link} from "react-router-dom";
import "../css/navBar.css"

export default function NavBar() {
    return (
    <nav>
        <Link to="/" className={"navBarBtn"}>Home</Link>
        <Link to="/pokedex" className={"navBarBtn"}>Pokedex</Link>
        <Link to="/about" className={"navBarBtn"}>About me</Link>
    </nav>
    )
}