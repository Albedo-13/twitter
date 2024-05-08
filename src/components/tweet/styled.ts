import styled from "styled-components";

import { theme } from "@/styles/theme";

export const Wrapper = styled.div`
  position: relative;
  padding: ${theme.spacing.s20};
  border-bottom: ${({ theme }) => theme.border.gray};

  display: flex;
  gap: ${theme.spacing.s15};
`;

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.s10};
`;

export const UserName = styled.p`
  font-weight: ${theme.fontWeight.fw700};
  font-size: ${theme.fontSize.fs20};
`;

export const UserTag = styled.p`
  font-size: ${theme.fontSize.fs18};
  opacity: ${theme.opacity};
`;

export const TweetText = styled.p`
  font-size: ${theme.fontSize.fs18};
`;

export const Image = styled.img`
  border-radius: ${theme.spacing.s20};
  margin: ${theme.spacing.s15} 0;
  width: 100%;
`;
