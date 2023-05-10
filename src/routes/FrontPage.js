import NavBtn from "../components/NavBtn";
import {useEffect, useState} from "react";
import "../css/frontPage.css"

export default function FrontPage() {
    
    const [pokedex, setPokedex] = useState(null)
    const [loadingPo, setLoadingPo] = useState(true)
    const [errPo, setErrPo] = useState(null)
    let randNum = Math.floor(Math.random() * 1008) + 1

    const [about, setAbout] = useState(null)
    const [loadingAb, setLoadingAb] = useState(true)
    const [errAb, setErrAb] = useState(null)
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + randNum + "/")
            .then(response => response.json())
            .then(data => {
                setPokedex(data)
                setLoadingPo(false)
            })
            .catch(err => {
                setErrPo(err)
                console.log(errPo)
            })
    }, [errPo, randNum])
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon-form/10027/")
            .then(response => response.json())
            .then(data => {
                setAbout(data)
                setLoadingAb(false)
            })
            .catch(err => {
                setErrAb(err)
                console.error(errAb)
            })
    }, [errAb])


    return (
        <div className={"welcomeDiv"}>
            <text className={"welcomeTxt"}>Hey there! Where would you like me to take you?</text>
            <div className={"navButtons"}>
                {loadingPo ? (
                    <NavBtn destination="/pokedex" imgSrc={require("../images/ripple-loader.gif")} text="Pokedex"
                            imgAlt="pokedex"/>
                ) : (
                    <NavBtn destination="/pokedex" imgSrc={pokedex.sprites.front_default} text="Pokedex"
                            imgAlt={pokedex.name} />
                )
                }
                {loadingAb ? (
                    <NavBtn destination="/about" imgSrc={require("../images/ripple-loader.gif")} text="'About me' page"
                            imgAlt="unownQuestion"/>) : (
                    <NavBtn destination="/about" imgSrc={about.sprites.front_default} text="About me"
                            imgAlt="unownQuestion"/>
                )
                }
            </div>
        </div>
    )
}

