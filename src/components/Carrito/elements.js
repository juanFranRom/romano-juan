import styled from "styled-components"
import { FiShoppingCart as Cart } from 'react-icons/fi'

export const CartContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &:hover{
        color: white;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const LogoCart = styled(Cart)`
    color: #fff;
    font-size: 2.7rem;
    cursor: pointer;
`

export const QuantityCart = styled.span`
    border-radius: 50%;
    position: absolute;
    top: 8.2px;
    left: 22px;
    font-size: 16px;
`