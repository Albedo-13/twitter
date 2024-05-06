import styled from "styled-components";

import { theme } from "@/styles/theme";

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - ${theme.spacing.s50});
`;

export const Background = styled.img`
  // TODO: empty rule
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${theme.spacing.s40};
`;

export const H1 = styled.h1`
  font-weight: ${theme.fontWeight.fw900};
  font-size: ${theme.fontSize.fs84};
  margin-top: ${theme.spacing.s55};
`;

export const H2 = styled.h2`
  font-weight: ${theme.fontWeight.fw900};
  font-size: ${theme.fontSize.fs42};
  margin-top: ${theme.spacing.s45};
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

export const AuthFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.s20};
  height: ${theme.spacing.s50};
`;
