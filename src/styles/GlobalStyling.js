import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: #343434;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
  }
  input {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
  }
  button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
  }
`;

export default GlobalStyle;