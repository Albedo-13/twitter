import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@/styles/theme";

export const WrapperLink = styled(Link)`
  color: var(--text-primary-color);
  text-decoration: none;
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-top: 15px;
`;

export const UserTag = styled.p`
  font-size: 18px;
  opacity: ${theme.opacity};
`;

export const UserText = styled.p`
  font-size: 18px;
  max-height: 150px;
  margin-bottom: 15px;
  border-bottom: var(--border-gray);
  text-overflow: ellipsis;
  overflow: hidden;
`;
