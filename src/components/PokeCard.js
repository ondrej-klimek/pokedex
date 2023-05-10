import "../css/pokemon.css"

export default function PokeCard(props) {
    return (
        <div className={"idName"}>
            <p>
                #{props.id}
            </p>
            <h2>
                {props.name}
            </h2>
            <img src={props.sprite} alt={props.name + "'s sprite"} className={"sprite"}/>
        </div>
    )
}