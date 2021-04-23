import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root {

  --white: #FFF;

  --gray-50: #F7F8FA;
  --gray-100: #E6E8EB;
  --gray-200: #AFB2B1;
  --gray-500: #808080;
  --gray-800: #494D4B;

  --green-500: #04D361;
  
  --purple-300: #9F75FF;
  --purple-400: #9164FA; 
  --purple-500: #8257E5;
  --purple-800: #6F48C9;

}

* {

    margin:0;
    padding:0;
    box-sizing:border-box;
}

body {
    background-color:var(--gray-50);

}
body, input, textarea, button {
    font: 500 1rem sans-serif;
    color:var(---gray-500);
}

h1 {
    font-size:2rem;
}

h2 {
    font-size: 1.5rem;
}

button {
    cursor: pointer;
}
`

export default GlobalStyles;