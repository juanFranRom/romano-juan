import styled from "styled-components"
import { BsPlus } from 'react-icons/bs'
import { GrFormSubtract } from 'react-icons/gr'

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