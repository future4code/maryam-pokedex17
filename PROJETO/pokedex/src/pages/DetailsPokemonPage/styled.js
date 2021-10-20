import styled from "styled-components";

// header voltar e adicionar pokemons 

export const ContainerButton = styled.div`
    display: flex;
    background-color: #FDFDFD;
    height: 90px;
    align-items: center;
    justify-content: center;
`

export const ButtonPokedex = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const Button = styled.button`
    background-color: #585858;
    font-style: bold;
    font-weight: 700;
    color: white;
    
    height: 50px;
    width: 200px;
    border-radius: 8px;
    margin-left: 350px;
    cursor: pointer;
`

export const Titulo = styled.h2`
    margin-left: 30px;
    cursor: pointer;
`

// Escopo Página

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: row;
    box-align: center;
    align-items: center;

    justify-content: space-evenly;
    margin-left: 5vw;
    margin-bottom: 50px;
`

export const ContainerPhotos = styled.div`
    display: flex;
    flex-direction: column;

    img{
        height: 120px;
        margin-top: 70px;
    }
`

export const ContainerStats = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 35vh;
    align-items: center;
    
    border: 1px solid black;
    border-radius: 5px;
    box-align: center;
    box-shadow: grey;
    background-color: white;

    h2{
        margin-top: 10px;
    }
`

export const ContainerHability = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

export const ContainerType = styled.div`
    display: flex;
    width: 300px;
    height: 70px;
    justify-content: center;
    align-items: center;
    
    box-pack: center;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: grey;
    background-color: white;
`

export const ContainerMoves = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 50vh;
    align-items: center;
    
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: grey;
    box-align: center;
    overflow-y: scroll;
    margin-top: 50px;
`