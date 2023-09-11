import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}

    body {
        background-color: #F5F8FA;
    }

    body,
    html {
        font-family: Arial, sans-serif;
    }
`;

export default GlobalStyle;
