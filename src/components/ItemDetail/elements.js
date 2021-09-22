import styled from "styled-components"
import { Link } from "react-router-dom"

export const DetailContainer = styled.div`
    width: 90%;
    height: 70%;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 90%;
    }
`

export const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img{
        width: 100%;
        height: 370px;
        border-radius: 30px;
    }

    @media screen and (max-width: 768px){
        & img{
            width: 90%;
            height: 240px;
        }
    }
`

export const Detail = styled.div`
    width: 100%;
    height: 100%;
    padding: 90px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & p{
        width: 100%;
        margin-top: 20px;
        text-align: start;
    }

    & h1{
        width: 100%;
        text-align: start;
    }

    @media screen and (max-width: 768px){
        padding: 20px;

        & p{
            margin-top: 10px;
        }
        
        h1 {
            font-size: 1em;
        }
    }
`

export const Precio = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: center;
    margin: 20px 0;
    gap: 5px;

    & .precio{
        font-size: 30px;
        font-weight: 400;
    }

    @media screen and (max-width: 768px){
        margin: 5px 0;
        gap: 5px;
        font-size: 20px;
        font-weight: 300;
    }
`

export const CountWrapper = styled.div`
    width: 60%;
    text-align: center;

    @media screen and (max-width: 768px){
        width: 70%;
    }
`

export const Linea = styled.div`
    height: 90%;
    border-right: solid 1px black;

    @media screen and (max-width: 768px){
        width: 90%;
        border-top: solid 1px black;
        height: 0;
    }
`

export const CartLink = styled(Link)`
    text-decoration: none;
    background-color: rgb(254,191,24,0.8);
    padding: 12px 48px;
    border: none;
    outline: none;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    color: white;
    font-weight: 600;
    font-size: 16px;
    align-self: center;

    &:hover{
        color: rgb(139, 39, 39);
        transform: translateY(-1px);
    }
`

export const Descripcion = styled.div`
    width: 100%;
`