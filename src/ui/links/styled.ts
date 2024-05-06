import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@/styles/theme";

export const InlineLinkBlue = styled(Link)<{ $align?: string }>`
  color: ${theme.color.accents};
  text-decoration: none;
  text-align: ${(props) => props.$align || "left"};

  &:hover {
    color: ${theme.color.accents};
    text-decoration: underline;
  }
`;

export const BasicLinkDark = styled(Link)`
  font-size: ${theme.fontSize.fs14};
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
