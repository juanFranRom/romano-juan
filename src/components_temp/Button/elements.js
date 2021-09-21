import styled from "styled-components"

export const ButtonContainer = styled.button`
    width: 80%;
    background-color: rgb(254, 191, 24, 0.8);
    border: none;
    outline: none;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5) ;
    cursor: pointer;
    padding: 12px 0;
    transition: 0.3s;
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    align-self: center;

    &:hover{
        transform: translateY(-1px);
        color: rgb(139, 39, 39);
    }
`