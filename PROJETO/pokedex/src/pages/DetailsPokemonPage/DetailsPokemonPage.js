import React, {useState, useEffect, useContext} from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useParams } from "react-router";

import HeaderDetails from "../../components/Header/HeaderDetails";
import pokedexlogo from "../../img/pokedex.png"

import {PokedexPage} from "../../routes/coordinates"
import {ContainerButton, ButtonPokedex, Button, Titulo, ContainerInfos, ContainerPhotos, ContainerStats, ContainerType, ContainerMoves, ContainerHability } from "./styled";
import GlobalStateContext from "../../global/GlobalStateContext";
import {BaseUrl} from "../../constants/BaseUrl";


const DetailsPokemonPage = () => {
    const { name, telaPokedex } = useParams();
    const history = useHistory();
    const { pokemons, pokedex } = useContext(GlobalStateContext);
    const [selectedPokemon, setSelectedPokemon] = useState({});

    useEffect(() => {
        let current = [];
        if (telaPokedex) {
            current = pokedex.find((item) => {
            return item.name === name;
            });
        } else {
            current = pokemons.find((item) => {
            return item.name === name;
            });
        }
    
        if (!current) {
        axios
            .get(`${BaseUrl}/pokemon/${name}`)
            .then((res) => setSelectedPokemon(res.data))
            .catch((err) => console.log(err.response.message));
        } else {
            setSelectedPokemon(current);
        }
    }, []);

    return (
        <div>
    
            <HeaderDetails/>

            <ContainerButton>
                <ButtonPokedex onClick={PokedexPage}><img src={pokedexlogo}  alt="pokedex botão"/></ButtonPokedex>
                <Titulo>Pokedex</Titulo>
                <Button>Add ou Remove Pokemon da Pokedex</Button>
            </ContainerButton>
        
            <ContainerInfos>
                {selectedPokemon && selectedPokemon.sprites &&
                <ContainerPhotos>
                    <img src={selectedPokemon.sprites.front_default} alt="foto pokemon" />
                    <img src={selectedPokemon.sprites.back_default} alt="foto pokemon" />
                </ContainerPhotos>
                }

                <ContainerStats>
                {selectedPokemon && selectedPokemon.stats.map((stat) => {
                        return(
                                <p key={stat.stat.name}>
                                    <strong>{stat.stat.name}</strong> {stat.base.stat}
                                </p>
                        )})
                }
                </ContainerStats>


                <ContainerHability>
                    <ContainerType>
                    {selectedPokemon &&
                    selectedPokemon.types.map((type) => {
                        return(
                                <p key={type.type.name}>{type.type.name}</p>
                        )})
                    }
                    </ContainerType>

                    <ContainerMoves>
                    {selectedPokemon &&
                    selectedPokemon.moves.map((move, index) => {
                        return(
                                index <5 && <p key={move.move.name}>{move.move.name}</p>
                        )})
                    }
                    </ContainerMoves>
                </ContainerHability>

            </ContainerInfos>
        </div>
    
    )
}

export default DetailsPokemonPage; 