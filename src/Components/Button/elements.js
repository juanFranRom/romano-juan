import styled from "styled-components"

export const ButtonContainer = styled.button`
    background-color: rgb(254,191,24, 0.8);
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    cursor: pointer;
    padding: 12px 22px;
    transition: 0.3s;
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;

    &:hover{
        transform: translateY(-2px);
        color: rgb(139, 39, 39);
    }
`