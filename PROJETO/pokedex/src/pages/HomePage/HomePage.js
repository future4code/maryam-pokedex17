import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import HeaderHome from "../../components/Header/HeaderHome";
import {ButtonAdd, PokeImagem, ContainerButton, ContainerPokedex, ContainerCard, NamePokemon, CardButton, Button, ButtonPokedex, Titulo } from "./styled";

import pokedexlogo from "../../img/bagmaior.png"
import {BaseUrl} from "../../constants/BaseUrl";
import useRequestData from "../../hooks/useRequestData";
import GlobalStateContext from "../../global/GlobalStateContext";


const HomePage = () => {
    const [pokedexList, setPokedexList] = useState([])

    const pokemonsList = useRequestData(`${BaseUrl}/pokemon?limit=0&offset=0`, {})


    const addPokemon = (pokemon) => {
        if (!pokedexList.includes(pokemon)) {
            const updateList = [...pokedexList, pokemon];
            setPokedexList(updateList);
            console.log(pokedexList)
        }
    }
    
    
    const history = useHistory()

    const PokedexPage = () => {
        history.push("/pokedex")
    }

    const DetailsPokemonPage = (name) => {
        history.push(`/pokemon/${name}`)
    }


    const CardPokemon = pokemonsList && pokemonsList.map((poke) => {
        return (
            <ContainerCard key={poke.url}>
                <PokeImagem src={poke && poke.sprites && poke.sprites.versions['generation-v']['black-white'].animated.front_default} alt={poke.name}/>
                <NamePokemon>{poke.name.toUpperCase()}</NamePokemon>
                
                <CardButton>
                    <Button onClick={() => DetailsPokemonPage(poke.name)} key={poke.name}>Detalhes</Button>
                    <ButtonAdd onClick={() => addPokemon(poke)}>Adicionar</ButtonAdd>
                </CardButton>
            </ContainerCard>
        )
    })


    return (
        <div>

            <HeaderHome />

            <ContainerButton>
                <ButtonPokedex onClick={PokedexPage}><img src={pokedexlogo}  alt="pokedex botão"/></ButtonPokedex>
                <Titulo>Acesse sua Pokedex</Titulo>
            </ContainerButton>

            <ContainerPokedex>
                {CardPokemon}
            </ContainerPokedex>
            
        
        </div>
    )
}

export default HomePage; 