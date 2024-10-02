import { createGlobalStyle } from "styled-components";

import { theme } from "@/styles/theme";

export const GlobalStyle = createGlobalStyle`
  :root{
    --theme-change-time: 0.35s all;
    --avatar-image-size: 50px;
    --header-height: 0px;
    --footer-height: 50px;

    --aside-left-width: 260px;
    --main-section-width: 600px;
    --aside-right-width: 300px;

    --scrollbar-basic-width: 8px;
    --scrollbar-color: rgba(20, 20, 20, 1);
    --scrollbar-bg-color: rgba(180, 180, 180, 1);
    --border-gray: 1px solid #d8d8d8;
    --search-input-color: #eff3f4;
    --placeholder-color: #828282;
    --link-hover-bg: rgba(0, 0, 0, 0.1);

    --like-size: 20px;
    --like-inner-liked: #ff0000;
    --like-inner-not-liked: transparent;
    --like-outer-liked: #ff0000;
    --like-outer-not-liked: #000;
    --like-hover-liked: #f674744e;
    --like-hover-not-liked: #f96969;

    --dark-color: #000;
    --light-color: #fff;
    --primary-color:#2f80ed;
    --accents-color: #1da1f2;
    --secondary-color: #b3b8bb;

    --text-primary-color: #000000;
    --bg-primary-color: #fff;
    
    --error-color: #f5222d;
  }

  #root {
    &.dark {
      --like-outer-not-liked: #ffffff;
      --link-hover-bg: rgba(255, 255, 255, 0.1);
      --search-input-color: rgb(32, 35, 39);
      --placeholder-color: #d5d5d5;
      --border-gray: 1px solid rgba(46,50,54,255);

      --dark-color: #c4b4b4;
      --light-color: #191515;
      --primary-color: #2f80ed;
      --accents-color: #1da1f2;
      --secondary-color: #898d8f;

      --text-primary-color: #ffffff;
      --bg-primary-color: #000000;

    }
  }

  #root {
    /* background-color: var(--bg-primary-color); */
  }
  
  * {
    font-family: "Roboto", sans-serif;
    color-scheme: ${({ theme }) => theme.colorScheme};
    box-sizing: border-box;
    color: var(--text-primary-color);

    //ебанёт? не должно
    transition: var(--theme-change-time);
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

  :root{
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

`;
