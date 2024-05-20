import styled from "styled-components";

import { theme } from "@/styles/theme";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1520px;
  margin: 0 auto;
`;

export const NavigationWrapper = styled.div`
  flex-basis: 20%;
  padding: ${theme.spacing.s10};
`;

export const ContentWrapper = styled.div`
  flex-basis: 60%;
  border-left: ${({ theme }) => theme.border.gray};
  border-right: ${({ theme }) => theme.border.gray};
`;

export const SearchWrapper = styled.div`
  flex-basis: 20%;
  padding: ${theme.spacing.s20};

  @media ${theme.device.lg} {
    flex-basis: 10%;
  }
`;

export const SearchDesktopWrapper = styled.div`
  @media ${theme.device.lg} {
    display: none;
  }
`;

export const SearchMobileWrapper = styled.div`
  display: none;

  & > button > img {
    filter: ${({ theme }) => theme.svgFill.primary};
  }

  @media ${theme.device.lg} {
    display: block;
  }
`;
