import styled from "styled-components"
import { BsPlus } from 'react-icons/bs'
import { GrFormSubtract } from 'react-icons/gr'

export const CountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 250px;
    height: 25px;
`

export const CountDisplay = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px;
    border-radius: 4px;

    & input{
        border: none;
        outline: none;
        text-align: center;
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