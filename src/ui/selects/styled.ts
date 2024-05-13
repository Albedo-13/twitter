import styled from "styled-components";

import { theme } from "@/styles/theme";

export const StyledSelect = styled.select`
  width: 100%;
  border: ${({ theme }) => theme.border.gray};
  padding: ${theme.spacing.s20};
  font-size: ${theme.fontSize.fs18};
  border-radius: ${theme.spacing.s5};
  cursor: pointer;
  outline: none;
  appearance: none;

  transition: all 0.2s linear;
`;

export const StyledOption = styled.option``;
