import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";


const PokedexPage = () => {

    const history = useHistory()

    const HomePage = () => {
        history.push("/")
    }

    const DetailsPokemonPage = () => {
        history.push("/pokedex/details")
    }

    return (
        <div>
            
            <div>

            <h1>PokedexPage</h1>
                
                <div>
                    <button onClick={HomePage}>Home</button>
                </div>

                <div>     
                    <button onClick={DetailsPokemonPage}>Detalhes Pokemons</button>
                </div>
            </div>

        </div>

    );
}

export default PokedexPage; 