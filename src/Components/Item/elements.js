import styled from "styled-components"
import { BsPlus } from 'react-icons/bs'
import { GrFormSubtract } from 'react-icons/gr'

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

export const CountDisplay = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px;
    border-radius: 4px;
    padding: 10px 5px;
    width: 90%;

    & input{
        border: none;
        outline: none;
        text-align: center;
        background-color: inherit;
    }
`

export const Substract = styled(GrFormSubtract)`
    font-size: 1rem;
    cursor: pointer;
`

export const Plus = styled(BsPlus)`
    font-size: 1rem;
    cursor: pointer;
`