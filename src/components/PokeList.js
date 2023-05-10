import {Pokemon} from "./Pokemon";
import "../css/pokemon.css"

export default function PokeList(props) {
    let pokemonList = props.data.map((item, index) =>
        <Pokemon url={item.url} key={index}/>
    )

    return (
        <div className="pokemonList">
            {pokemonList}
        </div>
    )
}