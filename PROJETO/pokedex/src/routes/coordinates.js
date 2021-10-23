export const HomePage = (history) => {
    history.push("/");
};

export const DetailsPokemonPage = (history, name, isPokedex) => {
    isPokedex
    ? history.push(`/pokemon/${name}/telaPokedex`)
    : history.push(`/pokemon/${name}`);
};

export const PokedexPage = (history) => {
    history.push("/pokemon");
};
