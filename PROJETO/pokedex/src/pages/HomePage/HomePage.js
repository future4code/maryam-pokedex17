import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";


const HomePage = () => {

    const history = useHistory()

    const PokedexPage = () => {
        history.push("/pokedex")
    }

    const DetailsPokemonPage = () => {
        history.push("/pokedex/details")
    }

    return (
        <div>
            
            <div>

                <h1>HomePage</h1>
                
                <div>
                    <button onClick={PokedexPage}>Pokedex</button>
                </div>

                <div>     
                    <button onClick={DetailsPokemonPage}>Detalhes Pokemons</button>
                </div>
            </div>

        </div>

    );
}

export default HomePage; 