import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";


const DetailsPokemonPage = () => {

    const history = useHistory()

    const HomePage = () => {
        history.push("/")
    }

    const PokedexPage = () => {
        history.push("/pokedex")
    }

    return (
        <div>
            
            <div>

                <h1>DetailsPokemonPage</h1>
                
                <div>
                    <button onClick={HomePage}>Home</button>
                </div>

                <div>     
                    <button onClick={PokedexPage}>Pokedex</button>
                </div>
            </div>

        </div>

    );
}

export default DetailsPokemonPage; 