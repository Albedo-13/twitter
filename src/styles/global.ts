import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --header-height: 0px;
    --footer-height: 50px;
    --avatar-image-size: 50px;
  }

  * {
    font-family: "Roboto", sans-serif;
    color-scheme: ${({ theme }) => theme.colorScheme};
  }

  p {
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .gridInterface{
    display: grid;
    height: 100vh;
    width: 100%;
    grid-template-areas:
      "header header header"
      "aside-left main-section aside-right"
      "footer footer footer";
    /* grid-template-rows: var(--header-height) 1fr;  */
    grid-template-rows: var(--header-height) 1fr var(--footer-height);
    grid-template-columns: 1fr 2fr 1fr; 
    transition: 0.2s all;
  }

`;
