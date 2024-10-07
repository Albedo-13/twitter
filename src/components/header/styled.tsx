import styled from "styled-components";

import { theme } from "@/styles/theme";

export const StyledHeader = styled.div`
  min-height: 50px;
  padding: 20px;
  border-bottom: var(--border-gray);
  display: flex;
  gap: 10px;
  align-items: center;
  /* flex-direction: row-reverse; */
`;

export const SwitchWrapper = styled.div`
  margin-left: auto;
  /* text-align: right; */
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  /* text-align: right; */
`;

export const NavigationMobileWrapper = styled.div`
  display: none;
  @media ${theme.device.sm} {
    display: block;
  }
`;