import styled from "styled-components"
import { FiShoppingCart as Cart } from 'react-icons/fi'

export const LogoCart = styled(Cart)`
    color: #fff;
    font-size: 2.5rem;
    cursor: pointer;

    @media screen and (max-width: 768px){
        display: none;
    }
`