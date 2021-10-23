import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DetailsPokemonPage } from "../../routes/coordinates"
import {ContainerCard, NamePokemon, CardButton, Button, ButtonAdd } from "./styled"
import GlobalStateContext from "../../global/GlobalStateContext";

const CardPoke = (props) => {
    const history = useHistory()
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
        GlobalStateContext);

        const addToPokedex = () => {
            const pokeIndex = pokemons.findIndex(
                (item) => item.name === props.poke.name
            );
            const newPokemonsList = [...pokemons];
            newPokemonsList.splice(pokeIndex, 1);
            const orderedPokemons = newPokemonsList.sort((a, b) => {
                return a.id - b.id;
            });
        
            const newPokedexList = [...pokedex, props.poke];
            const orderedPokedex = newPokedexList.sort((a, b) => {
                return a.id - b.id;
            });
        
            setPokedex(orderedPokedex);
            setPokemons(orderedPokemons);
        };
        
        const removeFromPokedex = () => {
            const pokeIndex = pokedex.findIndex(
                (item) => item.name === props.poke.name
            );
        
            const newPokedexList = [...pokedex];
            newPokedexList.splice(pokeIndex, 1);
            const orderedPokedex = newPokedexList.sort((a, b) => {
                return a.id - b.id;
            });
        
            const newPokemonsList = [...pokemons, props.poke];
            const orderedPokemons = newPokemonsList.sort((a, b) => {
                return a.id - b.id;
            });
        
            setPokedex(orderedPokedex);
            setPokemons(orderedPokemons);
        };


    return (
        <ContainerCard>
            <img src={props.poke && props.poke.sprites && props.poke.sprites.versions['generation-v']['black-white'].animated.front_default} alt={props.poke.name}/>
            <NamePokemon>{props.poke.name.toUpperCase()}</NamePokemon>

            <CardButton>
                <Button onClick={() => DetailsPokemonPage(history, props.poke.name, props.isPokedex)}> Detalhes </Button>
                <ButtonAdd onClick={props.isPokedex ? "removeFromPokedex" : "addToPokedex"}>
                {props.isPokedex ? "Remover" : "Adicionar"}
                </ButtonAdd>
            </CardButton>
        </ContainerCard>
    );
};

export default CardPoke;
