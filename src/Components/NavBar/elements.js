import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background-color: rgb(139, 39, 39);
    display: flex;
    justify-content: space-around;
    z-index: 2;
`

export const NavItem = styled.div`
    padding-right: 30px;
    transition: all 0.3s ease 0s;
    display: flex;
    align-items:center;

        & a{
            font-size: 16px;
            font-weight: 500;
            color: white;
            text-decoration: none;
        }

        & a:hover{
            color: rgb(254,191,24, 1);
        }
`

export const Bars = styled(FaBars)`
    display: none;
    color: rgb(0,0,0);

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtn = styled.button`
    background-color: rgb(254,191,24, 0.8);
    border: none;
    outline: none;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    cursor: pointer;
    padding: 12px 22px;
    transition: all 0.3s ease 0s;
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;

    &:hover{
        transition: all 0.3s ease 0s;
        color: rgb(139, 39, 39);
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`