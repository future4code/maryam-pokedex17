import React, {useState, useEffect, useContext} from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useParams } from "react-router";
import HeaderDetails from "../../components/Header/HeaderDetails";
import pokedexlogo from "../../img/pokedex.png"
import pokephoto from "../../img/estrelapoke.png"
import {ContainerButton, ButtonPokedex, Button, Titulo, ContainerInfos, ContainerPhotos, ContainerStats, ContainerType, ContainerMoves, ContainerHability } from "./styled";
import GlobalStateContext from "../../global/GlobalStateContext";


const DetailsPokemonPage = () => {
    
    const {name} = useParams()
    const {pokemons} = useContext(GlobalStateContext)
    const [selectedPokemon, setSelectedPokemon] = useState([])
    
    useEffect(() => {
        const currentPokemon = pokemons.find((item) => {
            return item.name === name
        })
        setSelectedPokemon(currentPokemon)
    }, [])

    const history = useHistory()

    const PokedexPage = () => {
        history.push("/pokedex")
    }

    return (
        <div>
    
            <HeaderDetails/>

            <ContainerButton>
                <ButtonPokedex onClick={PokedexPage}><img src={pokedexlogo}  alt="pokedex botão"/></ButtonPokedex>
                <Titulo>Pokedex</Titulo>
                <Button>Add ou Remove Pokemon da Pokedex</Button>
            </ContainerButton>
        
            <ContainerInfos>
                <ContainerPhotos>
                    <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.dream_world} alt="foto pokemon" />
                    <img src={pokephoto} alt="foto pokemon" />
                </ContainerPhotos>

                
                <ContainerStats>
                    <h2>Status</h2>
                    <br></br>
                    <p>HP:</p>
                    <p>Attack:</p>
                    <p>Defense:</p>
                    <p>Special-Attack:</p>
                    <p>Special-Defense:</p>
                    <p>Speed:</p>
                </ContainerStats>


                <ContainerHability>
                    <ContainerType>
                        <h2>Type</h2>
                    </ContainerType>

                    <ContainerMoves>
                        <h2>Especiais</h2>
                        <p>Move</p>
                        <p>Move</p>
                        <p>Move</p>
                    </ContainerMoves>
                </ContainerHability>

            </ContainerInfos>
        </div>
    );
}

export default DetailsPokemonPage; 