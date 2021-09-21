import styled from "styled-components"

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
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
`

export const CountWrapper = styled.div`
    width: 60%;

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