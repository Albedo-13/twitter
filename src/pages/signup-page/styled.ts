import styled from "styled-components";

import { theme } from "@/styles/theme";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${theme.spacing.s20};
  max-width: ${theme.spacing.s750};
  height: 100vh;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  margin: 0 auto;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.s20};
`;

export const H1 = styled.h1`
  font-weight: ${theme.fontWeight.fw700};
  font-size: ${theme.fontSize.fs30};
  margin-top: ${theme.spacing.s45};
`;

export const H2 = styled.h2`
  font-weight: ${theme.fontWeight.fw700};
  font-size: ${theme.fontSize.fs18};
`;

export const Text = styled.p`
  line-height: 150%;
  opacity: 0.6;
`;
