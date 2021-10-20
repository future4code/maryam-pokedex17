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
`

const Header = () => {
    return(
        <ContainerHeader>
            <Logo src={logo} alt="imagem logo" />
            <Titulo>Quem é esse Pokemon?</Titulo>
        </ContainerHeader>
    );
}

export default Header;