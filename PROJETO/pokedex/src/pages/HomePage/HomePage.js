import React, { useContext } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import HeaderHome from "../../components/Header/HeaderHome";
import {ContainerButton, ContainerPokedex, ContainerCard, NamePokemon, CardButton, Button, ButtonPokedex, Titulo } from "./styled";
import cardfoto from "../../img/estrelapoke.png"
import pokedexlogo from "../../img/bagmaior.png"
import GlobalStateContext from "../../global/GlobalStateContext";


const HomePage = ({pokemon}) => {

    const {pokemons} = useContext(GlobalStateContext)

    const history = useHistory()

    const PokedexPage = () => {
        history.push("/pokedex")
    }

    const DetailsPokemonPage = () => {
        history.push(`/pokemon/name`)
    }

    return (
        <div>

            <HeaderHome />

            <ContainerButton>
                <ButtonPokedex onClick={PokedexPage}><img src={pokedexlogo}  alt="pokedex botão"/></ButtonPokedex>
                <Titulo>Acesse sua Pokedex</Titulo>
            </ContainerButton>

            <ContainerPokedex>
                {/* {pokemons.map((poke) => {

                return (
                <ContainerCard>
                    <img src={pokemon.sprites && pokemon.sprites.dream_world} alt={pokemon.name}/>
                    <NamePokemon>{pokemon.name}</NamePokemon>
                    
                    <CardButton>
                        <Button>Adicionar</Button>
                        <Button onClick={() => DetailsPokemonPage(pokemon.name)}>Detalhes</Button>
                    </CardButton>
                </ContainerCard>
                )
                
                })} */}

            </ContainerPokedex>
        
        </div>
    )
}

export default HomePage; 