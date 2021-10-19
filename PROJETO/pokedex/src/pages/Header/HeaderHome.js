import styled from "styled-components";
import logo from "../../img/pokeball.png";

const ContainerHeader = styled.div `
    display: flex;
    background-color: black;
    height: 95px;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    height: 70px;
`  

const Titulo = styled.h1`
    color: white;
    margin-left: 30px;
    margin-right: 70px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Header = () => {
    return(
        <ContainerHeader>
            <Logo src={logo} alt="imagem logo" />
            <Titulo>POKEMON</Titulo>
        </ContainerHeader>
    );
}

export default Header;