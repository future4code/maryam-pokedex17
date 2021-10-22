export const HomePage = (history) => {
    history.push("/")
}

export const PokedexPage = (history) => {
    history.push("/pokedex")
}

export const DetailsPokemonPage = (history, name, isPokedex) => {
    isPokedex
        ? history.push(`/pokemon/${name}/telaPokedex`)
        : history.push(`/pokemon/${name}`);
}