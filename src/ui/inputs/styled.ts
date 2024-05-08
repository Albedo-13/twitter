import styled from "styled-components";

import { theme } from "@/styles/theme";

type StyledInputType = {
  width?: string;
  margin?: string;
}

export const StyledInput = styled.input<StyledInputType>`
  width: ${(props) => props.width || `calc(100% - ${theme.spacing.s40})`};
  margin: ${(props) => props.margin || `0`};
  border: ${({ theme }) => theme.border.gray};
  padding: ${theme.spacing.s20};
  font-size: ${theme.fontSize.fs18};
  border-radius: ${theme.spacing.s5};
`;
