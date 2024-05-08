import styled from "styled-components";

import { theme } from "@/styles/theme";

type StyledAvatar = {
  $width?: string;
};

export const StyledAvatar = styled.img<StyledAvatar>`
  width: ${(props) => props.$width || theme.spacing.s50};
  height: ${(props) => props.$width || theme.spacing.s50};
  border-radius: 100%;
`;
