import React, { useContext } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import HeaderHome from "../../components/Header/HeaderHome";
import {ContainerButton, ContainerPokedex, ContainerCard, NamePokemon, CardButton, Button, ButtonPokedex, Titulo } from "./styled";

import cardfoto from "../../img/estrelapoke.png"
import pokedexlogo from "../../img/bagmaior.png"
import GlobalStateContext from "../../global/GlobalStateContext";
import {BaseUrl} from "../../constants/BaseUrl";
import useRequestData from "../../hooks/useRequestData";


const HomePage = ({pokemon}) => {

    const pokelist = useRequestData(`${BaseUrl}/pokemon`, {})

    const history = useHistory()

    const PokedexPage = () => {
        history.push("/pokedex")
    }

    const DetailsPokemonPage = (name) => {
        history.push(`/pokemon/${name}`)
    }

    const CardPokemon = pokelist.results &&
    pokelist.results.map((poke) => {
        return (
        <ContainerPokedex key={poke.name}>
            <ContainerCard>
                <img src={poke.sprites && poke.sprites.other.dream_world.front_default} alt={poke.name}/>
                <NamePokemon>{poke.name}</NamePokemon>
                
                <CardButton>
                    <Button>Adicionar</Button>
                    <Button onClick={() => DetailsPokemonPage(poke.name)} key={poke.name}>Detalhes</Button>
                </CardButton>
            </ContainerCard>
        </ContainerPokedex>
        )
    })


    return (
        <div>

            <HeaderHome />

            <ContainerButton>
                <ButtonPokedex onClick={PokedexPage}><img src={pokedexlogo}  alt="pokedex botão"/></ButtonPokedex>
                <Titulo>Acesse sua Pokedex</Titulo>
            </ContainerButton>

            {CardPokemon}
            
        
        </div>
    )
}

export default HomePage; 