// import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
// import { DetailsPokemonPage } from "../../routes/coordinates";
// import GlobalStateContext from "../../global/GlobalStateContext";
// import {ContainerCard, NamePokemon, CardButton, Button } from "./styled"

// const CardPoke = ({pokemon}) => {

//     const history = useHistory()



//     return (
//         <ContainerCard>
//             {/* <img src={pokemon.sprites && pokemons.spritesversions['generation-v']['black-white'].animated.front_default} /> */}
//             <img src={pokemon.sprites && pokemon.sprites.dream_world} alt={pokemon.name}/>
//             <NamePokemon>{pokemon.name}</NamePokemon>

//             <CardButton>
//                 {/* <Button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
//                 {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
//                 </Button> */}
                
//                 {/* <Button onClick={() => DetailsPokemonPage(history, props.poke.name, props.isPokedex)}>Detalhes</Button> */}
//                 <Button onClick={() => DetailsPokemonPage(history, pokemon.name)}>Detalhes</Button>
//             </CardButton>
//         </ContainerCard>
//     );
// };

// export default CardPoke;
