import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    html, body{
        overflow-x: hidden;
        width: 100%;
        min-height: 100vh;
        height: 100%;
    }

    #root{
        height: 100%;
    }
`

export default GlobalStyle;