import styled from "styled-components";

import { theme } from "@/styles/theme";


export const ProfileWrapper = styled.div`
  border-top: none;
`;

export const ProfileHeader = styled.div`
  min-height: ${theme.spacing.s50};
  padding: ${theme.spacing.s20};
  border-bottom: ${theme.border.gray};
`;

export const ProfileHeaderName = styled.div`
  font-weight: ${theme.fontWeight.fw700};
  font-size: ${theme.spacing.s20};
`;

export const ProfileHeaderTweets = styled.div`
  opacity: ${theme.opacity};
`;

export const ProfileBackgroundImage = styled.img`
  height: ${theme.spacing.s280};
  width: 100%;
`;

export const ProfileBody = styled.div`
  padding: ${theme.spacing.s80} ${theme.spacing.s25} ${theme.spacing.s50} ${theme.spacing.s25};
  border-bottom: ${theme.border.gray};
  position: relative;
`;

export const ProfileBodyName = styled.p`
  font-weight: ${theme.fontWeight.fw700};
  font-size: ${theme.fontSize.fs24};
`;

export const ProfileBodyTag = styled.p`
  opacity: ${theme.opacity};
  margin-top: ${theme.spacing.s5};
`;

export const ProfileBodyStatus = styled.p`
  font-size: ${theme.fontSize.fs18};
  margin-top: ${theme.spacing.s15};
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: -${theme.spacing.s75};
  left: ${theme.spacing.s10};
`;

export const EditButtonWrapper = styled.div`
  position: absolute;
  right: ${theme.spacing.s20};
  top: ${theme.spacing.s20};
`;
