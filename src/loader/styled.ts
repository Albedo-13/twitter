import styled from "styled-components";

import { theme } from "@/styles/theme";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLoader = styled.img`
  max-width: ${theme.spacing.s100};
  height: auto;
  display: flex;
`;
