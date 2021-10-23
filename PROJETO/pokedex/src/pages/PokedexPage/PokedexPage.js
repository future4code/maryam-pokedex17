import React, { useContext } from "react";
import { useHistory } from "react-router";
import HeaderPokedex from "../../components/Header/HeaderPokedex";
import voltarlogo from "../../img/voltar.png"
import {ButtonRemove, ContainerButton, ContainerPokedex, ContainerCard, NamePokemon, CardButton, Button, ButtonPokedex, Titulo} from "./styled";

import { HomePage } from "../../routes/coordinates";
import GlobalStateContext from "../../global/GlobalStateContext";
import CardPoke from "../../components/CardPoke/CardPoke";

const PokedexPage = () => {
    const { pokedex } = useContext(GlobalStateContext);
    const history = useHistory();

    const PokeList = pokedex && pokedex.map((poke) => {
        return <CardPoke isPokedex key={poke.name} poke={poke} />
    })


    return (
        <div>
            <HeaderPokedex/>

            <ContainerButton>
                <ButtonPokedex onClick={HomePage}><img src={voltarlogo}  alt="voltar botão"/></ButtonPokedex>
                <Titulo>Voltar para Pokelist</Titulo>
            </ContainerButton>

            <ContainerPokedex>
                {PokeList}
            </ContainerPokedex>
        
        </div>
    );
}

export default PokedexPage; 
