export const HomePage = (history) => {
    history.push("/")
}

export const PokedexPage = (history) => {
    history.push("/pokedex")
}

export const DetailsPokemonPage = (history, name) => {
    history.push(`/pokemon/${name}`)
}