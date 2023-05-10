import {useEffect, useState} from "react";
import PokeList from "../components/PokeList";

export function Pokedex() {

    const [data, setData] = useState()
    const [pokemon, setPokemon] = useState()

    const fetchData = url => {
        setData(null)

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
                setPokemon(data.results)
            })
            .catch(err => {
                console.log(err.toString())
            })
    }

    useEffect(() => {
        fetchData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    }, [])
    
    const switchPrev = () => {
        fetchData(data.previous)
    }
    const switchNext = () => {
        fetchData(data.next)
    }

    return (
        data == null || pokemon == null ? (
            <div className="loadingPokedex">
                <img src={require("../images/ripple-loader.gif")} alt={"loading"}/>
                <text>Loading...</text>
            </div>
        ) : (
            <>
                <PokeList data={pokemon}/>
                <div>
                    <button onClick={switchPrev} disabled={data.previous == null}>Previous</button>
                    <button onClick={switchNext} disabled={data.next == null}>Next</button>
                </div>
            </>
        )
    )
}
