import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    color: #323232;
}
`;

export default GlobalStyle;
