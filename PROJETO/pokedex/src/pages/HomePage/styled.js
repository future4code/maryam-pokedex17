import styled from "styled-components";

// Pokedex Button 
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

export const Titulo = styled.h2`
    margin-left: 30px;
    cursor: pointer;
`

// Container Cards

export const ContainerPokedex = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    justify-self: center;
    margin: 20px 15px;
`

export const ContainerCard = styled.div`
    background-color: #FDFDFD;
    width: 250px;
    height: 300px;
    border-radius: 25px;
    img {
        height: 80px;
        margin: 0 auto;
        margin-left: 85px;
        margin-top: 30px;
        
    }
`

export const NamePokemon = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

export const CardButton = styled.div`
    display: flex;
    height: 10px;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px;
`

export const Button = styled.button`
    background-color: #585858;
    font-style: bold;
    font-weight: 700;
    color: white;
    
    height: 40px;
    width: 100px;
    border-radius: 8px;
    cursor: pointer;
`