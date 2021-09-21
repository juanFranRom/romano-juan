import styled from "styled-components"

export const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 50px;
    width: 100%;
    margin-top: 90px;
    text-align: center;
    
    & .title{
        font-size: 52px;
        font-weight: 600;
    }

    @media screen and (max-width: 768px){
        & .title{
            font-size: 32px;
        }
    }
`