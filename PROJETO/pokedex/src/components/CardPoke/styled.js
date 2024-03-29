import styled from "styled-components";

export const ContainerCard = styled.div`
    background-color: #FDFDFD;
    width: 250px;
    height: 300px;
    border-radius: 25px;
    img {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        margin-left: 80px;
        margin-top: 30px;
        
    }
`

export const NamePokemon = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
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
    font-size: medium;
    color: white;
    
    height: 40px;
    width: 100px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

export const ButtonAdd = styled.button`
    background-color: #FA7346;
    font-style: bold;
    font-weight: 700;
    font-size: medium;
    color: white;
    
    height: 40px;
    width: 100px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`