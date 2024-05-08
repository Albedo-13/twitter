import { Link } from "react-router-dom";
import styled from "styled-components";

type InlineLinkBlueType = {
  $align?: "left" | "right";
};

export const InlineLinkBlue = styled(Link)<InlineLinkBlueType>`
  color: ${({ theme }) => theme.color.accents};
  text-decoration: none;
  text-align: ${(props) => props.$align || "left"};

  &:hover {
    color: ${({ theme }) => theme.color.accents};
    text-decoration: underline;
  }
`;

export const BasicLinkDark = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.fs14};
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
