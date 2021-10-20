import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import HeaderDetails from "../Header/HeaderDetails";
import pokedexlogo from "../../img/pokedex.png"
import {ContainerButton, ButtonPokedex, Button, Titulo, ContainerInfos, ContainerPhotos, ContainerStats, ContainerType, ContainerMoves, ContainerHability } from "./styled";
import pokephoto from "../../img/estrelapoke.png"
import {BaseUrl} from "../../constants/BaseUrl"
import { useParams } from "react-router-dom"


const DetailsPokemonPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get(`${BaseUrl}/stat`)
        .then((res) => {
            setData(res.data.stat)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    
    const history = useHistory()

    const PokedexPage = () => {
        history.push("/pokedex")
    }

    return (
        <div>
    
            <HeaderDetails/>

            <ContainerButton>
                <ButtonPokedex onClick={PokedexPage}><img src={pokedexlogo}  alt="pokedex botão"/></ButtonPokedex>
                <Titulo>Pokedex</Titulo>
                <Button>Add ou Remove Pokemon da Pokedex</Button>
            </ContainerButton>
        
            <ContainerInfos>
                <ContainerPhotos>
                    <img src={pokephoto} alt="foto pokemon" />
                    <img src={pokephoto} alt="foto pokemon" />
                </ContainerPhotos>

                {data.map((stat) => {
                    return (
                        <ContainerStats>
                            <h2>Status</h2>
                            <br></br>
                            <p>HP:</p>
                            <p>Attack:</p>
                            <p>Defense:</p>
                            <p>Special-Attack:</p>
                            <p>Special-Defense:</p>
                            <p>Speed:</p>
                        </ContainerStats>
                        )
                })} 
                

                <ContainerHability>
                    <ContainerType>
                        <h2>Type</h2>
                    </ContainerType>

                    <ContainerMoves>
                        <h2>Especiais</h2>
                        <p>Move</p>
                        <p>Move</p>
                        <p>Move</p>
                    </ContainerMoves>
                </ContainerHability>

            </ContainerInfos>
        </div>
    );
}

export default DetailsPokemonPage; 