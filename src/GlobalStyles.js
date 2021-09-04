import { createGlobalStyle, GlobalStyleComponent } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    html, body{
        overflow-x: hidden;
    }
`

export default GlobalStyle;