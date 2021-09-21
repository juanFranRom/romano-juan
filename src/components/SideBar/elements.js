import styled from "styled-components"
import { AiOutlineClose as Close } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const SideBarContainer = styled.div`
    background-color: rgb(139, 39, 39);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 2;
    transition: 500ms;

    &.active{
        right: 0;
    }

    @media screen and (min-width: 768px){
        display: none;
    }
`

export const SideBarMenu = styled.div`
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SideBarItem = styled.div`
    width: 95%;
    height: 60px;
    padding: 50px 22px; 
    text-align: center;
    cursor: pointer;

    &:hover{
        background: rgba(0, 0, 0, 0.4);
    }
`

export const Cruz = styled(Close)`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 90%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
`

export const NavLink = styled(Link)`
    width: 80%;
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    text-align: center;

    &:hover{
        color: rgb(254,191,24, 1);
    }
`