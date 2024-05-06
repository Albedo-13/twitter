import styled from "styled-components";

import { theme } from "@/styles/theme";

export const SearchbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.s20};
  position: relative;
  background: ${({ theme }) => theme.color.searchInput};
  border-radius: ${theme.spacing.s30};
  min-height: ${theme.spacing.s55};
  width: 100%;
`;

export const SearchText = styled.input`
  font-size: ${theme.fontSize.fs18};
  padding-left: ${theme.spacing.s50};
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }
`;

export const SearchIcon = styled.img`
  width: ${theme.spacing.s20};
  height: ${theme.spacing.s20};
  left: ${theme.spacing.s20};
  filter: ${({ theme }) => theme.svgFill.primary};
  position: absolute;
`;
