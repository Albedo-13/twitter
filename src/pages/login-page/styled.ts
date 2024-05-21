import styled from "styled-components";

import { theme } from "@/styles/theme";

export const FormWrapper = styled.form`
  padding-top: ${theme.spacing.s60};
  max-width: ${theme.spacing.s450};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.s20};
  margin: 0 auto;

  @media ${theme.device.md} {
    padding: 0 ${theme.spacing.s20};
    margin-top: ${theme.spacing.s20};
  }
`;

export const H1 = styled.h1`
  @media ${theme.device.md} {
    text-align: center;
  }
`;

export const LogoWrapper = styled.div`
  @media ${theme.device.md} {
    text-align: center;
  }
`;