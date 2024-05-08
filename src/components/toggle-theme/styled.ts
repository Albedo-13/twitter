import styled from "styled-components";

import { theme } from "@/styles/theme";

export const StyledToggleTheme = styled.div`
  min-height: ${theme.spacing.s50};
  padding: ${theme.spacing.s20};
  border-bottom: ${({ theme }) => theme.border.gray};
`;

export const SwitchWrapper = styled.div`
  text-align: right;
`;
