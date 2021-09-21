import styled from "styled-components"

export const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    flex-direction: column;

    & p{
        text-align: center;
        font-size: 18px;
        font-weight: 900;
        color: ${ props => props.color};
    }
`

export const DotContainer = styled.div`
    height: 25px;
    width: 250px;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
`

export const Dot = styled.div`
    width: ${ props => props.state ? "20px" : "11px"};
    height: ${ props => props.state ? "20px" : "11px"};
    background-color: ${ props => props.color};
    border-radius: 50%;
    opacity: ${ props => props.state ? "1" : "0.6"};
    transition: all 550ms ease;
`

