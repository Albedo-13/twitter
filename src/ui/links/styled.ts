import { Link } from "react-router-dom";
import styled from "styled-components";

export const InlineLinkBlue = styled(Link)`
  color: #1e97e1;
  text-decoration: none;

  &:hover {
    color: #1e97e1;
    text-decoration: underline;
  }
`;

export const BasicLinkDark = styled(Link)`
  font-size: 14px;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
