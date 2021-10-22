import React, {useState, useEffect} from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import {BaseUrl} from "../constants/BaseUrl"

const GlobalState = (props) => {
    
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    
    useEffect(() => {
        getPokemonName()
    }, [])

    useEffect(() => {
        const pokeList = []
        pokemonName.forEach((item) => {
            axios
                .get(`${BaseUrl}/pokemon/${item.name}`)
                .then((response) => {
                    pokeList.push(response.data)
                    if(pokeList.length === 20){
                        const orderedList= pokeList.sort((a, b) => {
                            return a.id - b.id
                        })
                        setPokemons(orderedList)
                    }
                })
                .catch((err) => 
                    console.log(err.message)
                )
        })
        
    }, [pokemonName])


    
    const getPokemonName = () => {
        axios
        .get(`${BaseUrl}/pokemon?limit=20`)
        .then((response) => {
            setPokemonName(response.data.results)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    
    const data = {pokedex, setPokedex, pokemons, setPokemons}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
    
}

export default GlobalState;