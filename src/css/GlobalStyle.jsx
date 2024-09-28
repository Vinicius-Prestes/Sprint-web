import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color1: #333;
    --bg-color: white;
    --bg-color3: #EF0C0C;
    --bg-color4: #BA0000;
    --bg-color2: #e7e6e6;
    --bg-color5: #EDEDED;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: var(--bg-color2);
  }
`;

export default GlobalStyle;