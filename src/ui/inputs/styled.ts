import styled from "styled-components";

import { theme } from "@/styles/theme";

export const StyledInput = styled.input`
  width: calc(100% - ${theme.spacing.s40});
  border: ${({ theme }) => theme.border.gray};
  padding: ${theme.spacing.s20};
  font-size: ${theme.fontSize.fs18};
  border-radius: ${theme.spacing.s5};
`;
