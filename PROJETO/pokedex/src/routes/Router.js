import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailsPokemonPage from "../pages/DetailsPokemonPage/DetailsPokemonPage";

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path={"/"}>
                    <HomePage/>
                </Route>

                <Route exact path={"/pokedex"}>
                    <PokedexPage/>
                </Route>

                <Route exact path={"/pokemon/:name/:telaPokedex"}>
                    <DetailsPokemonPage />
                </Route>
                
                <Route>
                    <div> Erro Página não encontrada </div>
                </Route>

            </Switch>
        </BrowserRouter>
    );
};

export default Router; 