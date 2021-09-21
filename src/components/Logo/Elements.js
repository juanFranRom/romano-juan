import styled from "styled-components"

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: fit-content;

    & p{
        font-weight: 700;
        font-size: 16px;
        color: #fff;
    }

    & span{
        font-size: 20px;
    }

    & img{
        width: 55px;
    }
`