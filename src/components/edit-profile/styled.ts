import styled from "styled-components";

import { theme } from "@/styles/theme";

export const StyledFormProfile = styled.form`
  & > * {
    margin-top: ${theme.spacing.s15};
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSize.fs20};
  font-weight: ${theme.fontWeight.fw500};
  text-transform: uppercase;
  text-align: center;
`;
