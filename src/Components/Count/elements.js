import styled from "styled-components"
import { TiPlus, TiMinus } from 'react-icons/ti'

export const CountWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const CountDisplay = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px;
    border-radius: 4px;
    padding: 10px 5px;
    width: 90%;
    color: black;

    & input{
        border: none;
        outline: none;
        text-align: center;
        background-color: inherit;
    }
`

export const Substract = styled(TiMinus)`
    font-size: 1rem;
    cursor: pointer;
`

export const Plus = styled(TiPlus)`
    font-size: 1rem;
    cursor: pointer;
`