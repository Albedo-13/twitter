import styled from "styled-components";

import { theme } from "@/styles/theme";

export const Wrapper = styled.div`
  position: relative;
  padding: ${theme.spacing.s20};
  border-bottom: ${({ theme }) => theme.border.gray};

  display: flex;
  gap: ${theme.spacing.s15};
  cursor: default;

  @media ${theme.device.sm} {
    padding: ${theme.spacing.s10} ${theme.spacing.s5};
  gap: ${theme.spacing.s5};
  }
`;

export const AvatarWrapper = styled.div`
  width: ${theme.spacing.s50};
  height: ${theme.spacing.s50};
`;

export const BodyWrapper = styled.div`
  width: 100%;
  margin-bottom: ${theme.spacing.s25};
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.s10};

  @media ${theme.device.lg} {
    flex-direction: column;
    gap: 0;
  }
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
  margin-top: ${theme.spacing.s5};
`;

export const Image = styled.img`
  border-radius: ${theme.spacing.s20};
  margin-top: ${theme.spacing.s15};
  max-height: ${theme.spacing.s330};
  width: auto;
  max-width: 100%;
`;

export const DeleteIcon = styled.img`
  width: ${theme.spacing.s20};
  height: ${theme.spacing.s20};
  right: ${theme.spacing.s20};
  filter: ${({ theme }) => theme.svgFill.primary};
  position: absolute;
  cursor: pointer;
  user-select: none;
`;

export const LikeWrapper = styled.div`
  gap: ${theme.spacing.s5};
  user-select: none;
  position: absolute;
  padding: ${theme.spacing.s10};
  cursor: pointer;
`;

export const LikeIcon = styled.img`
  &[data-isliked="false"] {
    filter: ${({ theme }) => theme.svgFill.primary};
  }
`;

export const LikeCount = styled.span`
  font-size: ${theme.fontSize.fs20};
  padding-left: ${theme.spacing.s10};
`;
