import { createGlobalStyle } from "styled-components";

import { theme } from "@/styles/theme";

export const GlobalStyle = createGlobalStyle`
  :root{
    --avatar-image-size: 50px;
    --header-height: 0px;
    --footer-height: 50px;

    --aside-left-width: 260px;
    --main-section-width: 600px;
    --aside-right-width: 300px;

    --border-gray: 1px solid #d8d8d8;
    --scrollbar-basic-width: 8px;
    --scrollbar-color: rgba(20, 20, 20, 1);
    --scrollbar-bg-color: rgba(180, 180, 180, 1);
    --search-input-color: #eff3f4;
    --placeholder-color: #828282;
    
    --primary-color:#2f80ed;
    --secondary-color: #b3b8bb;
    --accents-color: #1da1f2;
    --dark-color: #000;
    --light-color: #fff;

    --text-primary-color: #000;
    --bg-primary-color: #fff;
    
    --error-color: #f5222d;

    @media ${theme.device.xl} {
      /* background-color:red; */
    }
    @media ${theme.device.lg} {
      /* background-color:yellow; */
      --aside-left-width: 200px;
      --main-section-width: 570px;
      --aside-right-width: 70px;
    }
    @media ${theme.device.md} {
      /* background-color:green; */
      --aside-left-width: 85px;
      --main-section-width: 445px;
      --aside-right-width: 60px;
    }
    @media ${theme.device.sm} {
      background-color:blue;
      --aside-left-width: 0px;
      --aside-right-width: 0px;
    }
    @media ${theme.device.xs} {
      background-color:violet;
    }
  }

  ::-webkit-scrollbar {
    width: var(--scrollbar-basic-width);
    color: var(--scrollbar-color);
    background-color: var(--scrollbar-bg-color);

    &-thumb {
      /* border: 1px solid var(--bg-dark); */
      border-radius: 10px;
      background: var(--scrollbar-color);
    }
    &-button {
      height: 2px;
    }
  }

  * {
    font-family: "Roboto", sans-serif;
    color-scheme: ${({ theme }) => theme.colorScheme};
    box-sizing: border-box;
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
    /* width: 100%; */
    grid-template-areas:
      "header header header"
      "aside-left main-section aside-right"
      "footer footer footer";
    /* grid-template-rows: var(--header-height) 1fr;  */
    grid-template-rows: var(--header-height) 1fr var(--footer-height);
    grid-template-columns: var(--aside-left-width) var(--main-section-width) var(--aside-right-width); 
    transition: 0.2s all;
  }

`;
