import React, { useContext} from "react";
import { useHistory } from "react-router";
import HeaderHome from "../../components/Header/HeaderHome";
import pokedexlogo from "../../img/bagmaior.png"
import {ButtonAdd, PokeImagem, ContainerButton, ContainerPokedex, ContainerCard, NamePokemon, CardButton, Button, ButtonPokedex, Titulo } from "./styled";

import GlobalStateContext from "../../global/GlobalStateContext";
import { PokedexPage } from "../../routes/coordinates";
import CardPoke from "../../components/CardPoke/CardPoke"

const HomePage = () => {
    const { pokemons } = useContext(GlobalStateContext);
    const history = useHistory();

    const PokeList = pokemons && pokemons.map((poke) => {
        return <CardPoke key={poke.name} poke={poke} />
    })

    return (
        <div>
            <HeaderHome />

            <ContainerButton>
                <ButtonPokedex onClick={PokedexPage}><img src={pokedexlogo}  alt="pokedex botão"/></ButtonPokedex>
                <Titulo>Acesse sua Pokedex</Titulo>
            </ContainerButton>

            <ContainerPokedex>
                {PokeList}
            </ContainerPokedex>
        </div>
    )
}

export default HomePage; 
