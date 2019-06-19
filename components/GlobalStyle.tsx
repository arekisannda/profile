import theme from "../styles/main";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    div#__next, html, body {
        font-family: "Inconsolata";
        margin: 0;
        border: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        font-size: 1em;

        display: flex;
        justify-content: center;

        color: ${theme.foreground};
        background: ${theme.background};
        scroll-behavior: smooth;
    }

    main {
        margin: 0;
        border: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 400;
        src: url('../static/fonts/inconsolata.woff') format('woff');
    }

    @font-face {
        font-family: 'Inconsolata';
        font-style: normal;
        font-weight: 700;
        src: url('../static/fonts/inconsolata-bold.woff') format('woff');
    }
`;
