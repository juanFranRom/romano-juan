import styled from "styled-components"
import { FiShoppingCart as Cart } from 'react-icons/fi'

export const LogoCart = styled(Cart)`
    color: rgb(0,0,0);
    font-size: 2.5rem;
    cursor: pointer;
    margin-left: 10vw;

    @media screen and (max-width: 768px){
        display: none;
    }
`