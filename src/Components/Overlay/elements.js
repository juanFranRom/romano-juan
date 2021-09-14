import styled from "styled-components"

export const OverlayContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: ${ props => props.active ? "visible" : "hidden"}; /* Este valor se cambió de hidden a visible */
`