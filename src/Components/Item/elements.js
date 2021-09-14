import styled from "styled-components"

export const CountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 280px;
    height: 400px;
    border: transparent 1px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    transition: all 300ms ease;
    margin: 20px;

    &:hover{
        transform: translatey(-2px) translateX(2px);
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
        background-color: rgba(0, 0, 0, 0.08);
    }

    & img{
        width: 90%;
        height: 180px;
        cursor: pointer;
        border-radius: 20px;
    }

    & h1{
        font-size: 19px;
    }
`
export const ItemDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`