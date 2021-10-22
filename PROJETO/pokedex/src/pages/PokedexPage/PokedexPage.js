import {useState, useEffect} from "react";
import { useHistory } from "react-router";
import axios from "axios";
import HeaderPokedex from "../../components/Header/HeaderPokedex";
import voltarlogo from "../../img/voltar.png"

import {ButtonRemove, ContainerButton, ContainerPokedex, ContainerCard, NamePokemon, CardButton, Button, ButtonPokedex, Titulo} from "./styled";
import cardfoto from "../../img/estrelapoke.png"
import {BaseUrl} from "../../constants/BaseUrl"

const PokedexPage = () => {

    const [pokedexList, setPokedexList] = useState([])
    
    useEffect(() => {
        getPokedex();
    }, [])

    const getPokedex = () => {
        axios
        .get(`${BaseUrl}/pokemon?limit=0&offset=0`)
        .then((response) => {
            setPokedexList(response.data.results);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const removePokemon = (pokemon) => {
        const pokemonIndex = pokedexList.indexOf(pokemon)
        const updateList = pokedexList.splice(pokemonIndex, 1)
        setPokedexList(updateList);
    }
    
    
    const history = useHistory()

    const HomePage = () => {
        history.push("/")
    }

    const DetailsPokemonPage = (name) => {
        history.push(`/pokemon/${name}`)
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
                        <Button onClick={DetailsPokemonPage}>Detalhes</Button>
                        <ButtonRemove onClick={removePokemon}>Remover</ButtonRemove>
                    </CardButton>
                </ContainerCard>
            
            </ContainerPokedex>
        
        </div>
    );
}

export default PokedexPage; 