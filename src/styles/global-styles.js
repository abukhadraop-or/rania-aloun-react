import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }

body {
  margin: 0;
  font-family: 'Cantarell', 'sans-serif;
} 
`;

export default GlobalStyle;
