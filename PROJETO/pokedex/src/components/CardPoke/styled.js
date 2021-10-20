import styled from "styled-components";

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