import styled from "styled-components";

import { theme } from "@/styles/theme";

export const FormWrapper = styled.form`
  padding-top: ${theme.spacing.s60};
  max-width: ${theme.spacing.s450};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.s20};
  /* height: 100vh; */
  margin: 0 auto;
`;
