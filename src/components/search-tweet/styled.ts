import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@/styles/theme";

export const WrapperLink = styled(Link)`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
`;

export const UserName = styled.p`
  font-weight: ${theme.fontWeight.fw600};
  font-size: ${theme.fontSize.fs18};
  margin-top: ${theme.spacing.s15};
`;

export const UserTag = styled.p`
  font-size: ${theme.fontSize.fs18};
  opacity: ${theme.opacity};
`;

export const UserText = styled.p`
  font-size: ${theme.fontSize.fs18};
  max-height: ${theme.spacing.s150};
  margin-bottom: ${theme.spacing.s15};
  border-bottom: ${({ theme }) => theme.border.gray};
  text-overflow: ellipsis;
  overflow: hidden;
`;
