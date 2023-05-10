import {useEffect, useState} from "react";
import PokeCard from "./PokeCard";
import PokeDetail from "./PokeDetail";
import "../css/general.css";
import "../css/pokemon.css"


export function Pokemon(props) {
    const [pokemon, setPokemon] = useState(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        fetch(props.url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPokemon(data)
            })
            .catch(err => {
                console.log(err.toString())
            })
    })

    return (
        pokemon == null ? (
            <div className="noPokemon">
                <img src="../images/ripple-loader.gif" alt="loading"/>
                <text>Loading...</text>
            </div>) : (
                <>
                    <div className="pokemon" onClick={() => setVisible(true)}>
                        <PokeCard id={pokemon.id} name={pokemon.name} sprite={pokemon.sprites.front_default}/>
                    </div>

                    <div className={"pokeDetail " + (!visible ? "invisible" : "")}>
                        <div className="dismissButton" onClick={() => setVisible(false)}>x</div>
                        <PokeDetail pokemon={pokemon}/>
                    </div>
            </>)
    )
}