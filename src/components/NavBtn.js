import {Link} from "react-router-dom";
import "../css/navBtn.css"

export default function NavBtn({ destination, imgSrc, text, imgAlt }) {
    return (
        <div className={"navBtn"}>
            <Link to={destination} >
                <div>
                    <img src={imgSrc} alt={imgAlt}/>
                </div>
                <div>
                    <p>{text}?</p>
                </div>
            </Link>
        </div>
    )
}