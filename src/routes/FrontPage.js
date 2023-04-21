import {Link} from "react-router-dom";

export default async function FrontPage() {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon-form/10027/")
    if (!response.ok) throw new Error("Unable to load image")
    let unownQmark = await response.json()

    return (
        <>
            <text>Take me to...</text>
            <MyBtn destination={"/pokedex"} imageSrc={"../../public/pikaSil.png"} text={"Pokedex"}
                   imgAlt={"Pikachu silhouette"}/>
            <MyBtn destination={"/about"} imageSrc={unownQmark.sprites.front_default} text={"About me"}
                   imgAlt={"Unown ?"}/>
        </>
    )
}

function MyBtn(destination, imgSrc, text, imgAlt) {
    return (
        <Link to={destination}>
            <div>
                <img src={imgSrc} alt={imgAlt}/>
                <text>{text}</text>
            </div>
        </Link>
    )
}

