import styled from "styled-components";
import twitterBackground from "@/assets/imgs/back-twitter.webp";
import { theme } from "@/styles/theme";

export const Wrapper = styled.section`
  grid-area: main-section;
  overflow-y: auto;
  position: relative;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.88);
  display: flex;
  height: calc(100vh - ${theme.spacing.s50});
  justify-content: center;
  /* height: auto; */
  
  @media ${theme.device.xs} {
    padding: 0 ${theme.spacing.s20};
  }
`;

export const AuthFooterWrapper = styled.div`
  /* border-radius: 5%;
  background-color: rgba(155,155,155,0.69); */
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.s20};
  height: ${theme.spacing.s50};

  @media ${theme.device.xl} {
    padding: 0 ${theme.spacing.s20};
  }

  @media ${theme.device.lg} {
    padding-top: ${theme.spacing.s10};
    flex-wrap: wrap;
    margin-top: ${theme.spacing.s50};
  }
`;

export const Background = styled.div`
  background: url(${twitterBackground}) center center / cover no-repeat;
  filter: blur(8px);
  background-color: aqua;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -666;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacing.s20};
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-left: ${theme.spacing.s40}; */

  @media ${theme.device.lg} {
    margin: 0;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: ${theme.spacing.s25};
`;

export const H1 = styled.h1`
  font-weight: ${theme.fontWeight.fw900};
  font-size: ${theme.fontSize.fs84};
  margin-top: ${theme.spacing.s55};
  text-align: center;

  @media ${theme.device.xl} {
    font-size: ${theme.fontSize.fs42};
    margin-top: ${theme.spacing.s20};
  }
`;

export const H2 = styled.h2`
  font-weight: ${theme.fontWeight.fw900};
  font-size: ${theme.fontSize.fs42};
  margin-top: ${theme.spacing.s45};
  text-align: center;

  @media ${theme.device.xl} {
    font-size: ${theme.fontSize.fs30};
    margin-top: ${theme.spacing.s20};
  }
`;

export const PolicyText = styled.p`
  max-width: ${theme.spacing.s370};
  font-size: ${theme.fontSize.fs14};
  margin-top: ${theme.spacing.s30};
  line-height: 143%;
`;

export const LoginText = styled.p`
  margin-top: ${theme.spacing.s20};
`;

