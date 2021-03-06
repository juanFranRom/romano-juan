import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const NavContainer = styled.nav`
    background-color: rgb(139, 39, 39);
    height: 90px;
    display: flex;
    justify-content: space-around;
    padding: 5px 2rem;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    @media screen and (max-width: 768px){
        justify-content: space-between;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    height: 100%;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.div`
    display: flex;
    align-items:center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavBtn = styled.div`
    height: 100%;
    width: 150px;
    display: flex;
    align-items: center;
    margin-right: 50px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: rgb(255,255,255);

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 100%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavLink = styled(Link)`
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: none;

    &:hover{
        color: rgb(254,191,24, 1);
    }
`