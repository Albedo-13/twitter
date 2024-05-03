import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 50px);
`;

// TODO: clear styles & in auth page calls
export const WrapperLeft = styled.div`
  /* width: 60%; */
`;

export const WrapperRight = styled.div`
  /* width: 40%; */
`;

export const Background = styled.img`
  // TODO: empty rule
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
`;

export const H1 = styled.h1`
  font-weight: 900;
  font-size: 84px;
  margin-top: 57px;
  color: #000;
`;

export const H2 = styled.h2`
  font-weight: 900;
  font-size: 42px;
  margin-top: 46px;
  color: #000;
`;

export const PolicyText = styled.p`
  max-width: 370px;
  font-size: 14px;
  color: #000;
  line-height: 143%;
  margin-top: 30px;
`;

export const LoginText = styled.p`
  font-size: 16px;
  color: #000;
  margin-top: 20px;
`;

export const AuthFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 50px;
`;
