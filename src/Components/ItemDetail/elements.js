import styled from "styled-components"

export const DetailContainer = styled.div`
    width: 1000px;
    height: 400px;
    background-color: #fff;
    border-radius: 20px;

    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);

    display: grid;
    grid-template-columns: 50% auto;
`

export const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;

    & img{
        width: 100%;
        height: 340px;
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
`