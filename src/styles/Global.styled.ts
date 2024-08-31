import { createGlobalStyle } from "styled-components";
import { thema } from "./Thema";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    margin: 0;
    font-family: "Montserrat",-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;

  }

  ul {
    list-style: none;
  }
button{
  background-color: unset;
  border: none;
  color: ${thema.colors.secondaryText};
}

html body section {
    background-color: ${thema.colors.primeryBG} ;
    color: ${thema.colors.primeryText};

    padding:140px 0 ;
}
  `;
