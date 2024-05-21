import styled from "styled-components";

import { theme } from "@/styles/theme";

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${theme.spacing.s20};
  max-width: ${theme.spacing.s750};
  margin: ${theme.spacing.s20} auto 0;

  @media ${theme.device.md} {
    gap: ${theme.spacing.s10};
    padding: 0 ${theme.spacing.s20};
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: ${theme.spacing.s25};
  padding-bottom: ${theme.spacing.s20};
`;

export const LogoWrapper = styled.div`
  margin: 0 auto;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.s20};

  @media ${theme.device.sm} {
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  font-weight: ${theme.fontWeight.fw700};
  font-size: ${theme.fontSize.fs30};
  margin-top: ${theme.spacing.s45};

  @media ${theme.device.md} {
    margin-top: ${theme.spacing.s10};
    text-align: center;
  }
`;

export const H2 = styled.h2`
  font-weight: ${theme.fontWeight.fw700};
  font-size: ${theme.fontSize.fs18};
`;

export const Text = styled.p`
  line-height: 150%;
  opacity: ${theme.opacity};
`;
