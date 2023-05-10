export default function PokeDetail({ pokemon }) {
    let stats = pokemon.stats.map((item, index) =>
        <p className={"capitalize stat" + index} key={index}>{item.stat.name}: {item.base_stat}</p>
    )

    return (
        <div className={"pokeDetail"}>
            <div className={"detailName"}>#{pokemon.id} {pokemon.name}</div>
            <div className={"pokeImg"}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name + "'s sprite"}/>
            </div>
            <div className={"pokeStats"}>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                {stats}
            </div>
        </div>
    )
}