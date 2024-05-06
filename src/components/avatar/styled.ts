import styled from "styled-components";

import { theme } from "@/styles/theme";

export const StyledAvatar = styled.img<{ $width?: string }>`
  width: ${({ $width }) => $width || theme.spacing.s50};
  height: ${({ $width }) => $width || theme.spacing.s50};
  border-radius: 100%;
`;
