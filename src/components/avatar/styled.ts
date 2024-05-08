import styled from "styled-components";

import { theme } from "@/styles/theme";

export const StyledAvatar = styled.img`
  width: ${(props) => props.width || theme.spacing.s50};
  height: ${(props) => props.width || theme.spacing.s50};
  border-radius: 100%;
`;
