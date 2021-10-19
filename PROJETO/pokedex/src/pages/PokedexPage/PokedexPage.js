import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import HeaderPokedex from "../Header/HeaderPokedex";
import {ContainerButton, ContainerPokedex, ContainerCard, NamePokemon, CardButton, Button, ButtonPokedex, Titulo} from "./styled";
import cardfoto from "../../img/estrelapoke.png"
import voltarlogo from "../../img/voltar.png"


const PokedexPage = () => {

    const history = useHistory()

    const HomePage = () => {
        history.push("/")
    }

    const DetailsPokemonPage = () => {
        history.push("/details")
    }

    return (
        <div>

            <HeaderPokedex/>

            <ContainerButton>
                <ButtonPokedex onClick={HomePage}><img src={voltarlogo}  alt="voltar botão"/></ButtonPokedex>
                <Titulo>Voltar para Pokelist</Titulo>
            </ContainerButton>

            <ContainerPokedex>
                
                <ContainerCard>
                    <img src={cardfoto} alt="foto"/>
                    <NamePokemon>Pokemon</NamePokemon>
                    
                    <CardButton>
                        <Button>Remover</Button>
                        <Button onClick={DetailsPokemonPage}>Detalhes</Button>
                    </CardButton>
                </ContainerCard>
            
            </ContainerPokedex>
        
        </div>
    );
}

export default PokedexPage; 