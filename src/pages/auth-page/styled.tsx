import styled from "styled-components";
import twitterBackground from "@/assets/imgs/back-twitter.webp";
import { theme } from "@/styles/theme";

export const ProfileWrapper = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 1520px;
  margin: 0 auto;
`;

export const Wrapper = styled.section`
  grid-area: main-section;
  overflow-y: auto;
  position: relative;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.88);
  display: flex;
  height: calc(100vh - 50px);
  justify-content: center;
  /* height: auto; */

  @media ${theme.device.xs} {
    padding: 0 20px;
  }
`;

export const AuthFooterWrapper = styled.div`
  /* border-radius: 5%;
  background-color: rgba(155,155,155,0.69); */
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 50px;

  @media ${theme.device.xl} {
    padding: 0 20px;
  }

  @media ${theme.device.lg} {
    padding-top: 10px;
    flex-wrap: wrap;
    margin-top: 50px;
  }
`;

export const Background = styled.div`
  background: url(${twitterBackground}) center center / cover no-repeat;
  filter: blur(8px);
  background-color: aqua;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -666;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-left:  40px; */

  @media ${theme.device.lg} {
    margin: 0;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 25px;
`;

export const H1 = styled.h1`
  font-weight: 900;
  font-size: 84px;
  margin-top: 55px;
  text-align: center;

  @media ${theme.device.xl} {
    font-size: 42px;
    margin-top: 20px;
  }
`;

export const H2 = styled.h2`
  font-weight: 900;
  font-size: 42px;
  margin-top: 45px;
  text-align: center;

  @media ${theme.device.xl} {
    font-size: 30px;
    margin-top: 20px;
  }
`;

export const PolicyText = styled.p`
  max-width: 370px;
  font-size: 14px;
  margin-top: 30px;
  line-height: 143%;
`;

export const LoginText = styled.p`
  margin-top: 20px;
`;
