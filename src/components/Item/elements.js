import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"

export const CountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: transparent 1px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    transition: all 300ms ease;
    margin: 20px;
    padding: 12px;
    border: 1px solid #e6e6e6;

    &:hover{
        transform: translatey(-2px) translateX(2px);
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
        background-color: rgba(0, 0, 0, 0.1);
    }

    & img{
        width: 100%;
        height: 180px;
        cursor: pointer;
        border-radius: 10px;
    }

    & h1{
        font-size: 19px;
        color: black;
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

export const Link = styled(RouterLink)`
    text-decoration: none;
    width: 100%;
`