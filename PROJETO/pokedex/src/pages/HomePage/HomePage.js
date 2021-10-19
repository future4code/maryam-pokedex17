import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import HeaderHome from "../Header/HeaderHome";
import {ContainerButton, ContainerPokedex, ContainerCard, NamePokemon, CardButton, Button, ButtonPokedex, Titulo } from "./styled";
import cardfoto from "../../img/estrelapoke.png"
import pokedexlogo from "../../img/bagmaior.png"


const HomePage = () => {

    const history = useHistory()

    const PokedexPage = () => {
        history.push("/pokedex")
    }

    const DetailsPokemonPage = () => {
        history.push("/details")
    }

    return (
        <div>

            <HeaderHome />

            <ContainerButton>
                <ButtonPokedex onClick={PokedexPage}><img src={pokedexlogo}  alt="pokedex botão"/></ButtonPokedex>
                <Titulo>Acesse sua Pokedex</Titulo>
            </ContainerButton>

            <ContainerPokedex>
                
                <ContainerCard>
                    <img src={cardfoto} alt="foto"/>
                    <NamePokemon>Pokemon</NamePokemon>
                    
                    <CardButton>
                        <Button>Adicionar</Button>
                        <Button onClick={DetailsPokemonPage}>Detalhes</Button>
                    </CardButton>
                </ContainerCard>
                
            </ContainerPokedex>
        
        </div>
    );
}

export default HomePage; 