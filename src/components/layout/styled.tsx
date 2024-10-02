import styled from "styled-components";

import { theme } from "@/styles/theme";

export const ProfileWrapper = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 1520px;
  margin: 0 auto;
`;

export const NavigationWrapper = styled.aside`
  grid-area: aside-left;
  padding: 10px;

  @media ${theme.device.lg} {
    flex-basis: 0;
  }

  @media ${theme.device.sm} {
    position: absolute;
    transform: translate(-50%, 50%);
  }
`;

export const ContentWrapper = styled.section`
  grid-area: main-section;

  border-left: var(--border-gray);
  border-right: var(--border-gray);

  @media ${theme.device.sm} {
    flex-basis: 80%;
  }
`;

export const SearchWrapper = styled.aside`
  grid-area: aside-right;
  padding: 20px;

  @media ${theme.device.lg} {
    flex-basis: 0;
    padding: 10px;
  }

  @media ${theme.device.sm} {
    position: absolute;
    transform: translate(50%, 50%);
  }
`;

export const SearchDesktopWrapper = styled.div`
  @media ${theme.device.lg} {
    display: none;
  }
`;

export const SearchMobileWrapper = styled.div`
  display: none;

  & > button > img {
    filter: ${({ theme }) => theme.svgFill.primary};
  }

  @media ${theme.device.lg} {
    display: block;
  }
`;

export const NavigationMobileWrapper = styled.div`
  display: none;
  @media ${theme.device.sm} {
    display: block;
  }
`;

export const NavigationDesktopWrapper = styled.div`
  @media ${theme.device.sm} {
    display: none;
  }
`;

export const Background = styled.div`
  transition: var(--theme-change-time);
  background: var(--bg-primary-color) center center / cover no-repeat;
  /* filter: blur(8px); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -666;
`;
