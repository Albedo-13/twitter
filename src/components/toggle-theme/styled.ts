import styled from "styled-components";

export const StyledToggleTheme = styled.div`
  min-height: ${({ theme }) => theme.spacing.s50};
  padding: ${({ theme }) => theme.spacing.s20};
  border-bottom: ${({ theme }) => theme.border.gray};
`;

export const SwitchWrapper = styled.div`
  text-align: right;
`;
