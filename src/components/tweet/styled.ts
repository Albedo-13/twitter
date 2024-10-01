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
  user-select: none;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
`;

export const BodyWrapper = styled.div`
  width: 100%;
  max-width: 768px; 
  /* margin-bottom: ${theme.spacing.s25}; */
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.s10};
  align-items: center;
`;

export const UserName = styled.p`
  font-weight: ${theme.fontWeight.fw700};
  font-size: ${theme.fontSize.fs20};
`;

export const UserTag = styled.p`
  font-size: ${theme.fontSize.fs18};
  opacity: ${theme.opacity};
`;

export const UserTime = styled.time`
  font-size: ${theme.fontSize.fs18};
  opacity: ${theme.opacity};
`;

export const TweetText = styled.p`
  font-size: ${theme.fontSize.fs18};
  margin-top: ${theme.spacing.s5};
  width: 100%; 
  overflow-wrap: break-word;
  max-height: 300px;
  overflow-y: auto;
`;

export const Image = styled.img`
  border-radius: ${theme.spacing.s20};
  margin-top: ${theme.spacing.s15};
  max-height: ${theme.spacing.s330};
  width: auto;
  max-width: 100%;
`;



export const LikeWrapper = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: 15px;
  gap: 10px;
`;

export const LikeButton = styled.label`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const LikeSVGOuter = styled.svg`
  position: absolute;
  height: 20px;
  width: 20px;
  &.liked{
    color: red;
  }
  &.not_liked{
    color: black;
  }
`;

export const LikeSVGInner = styled.svg`
  position: absolute;
  height: 20px;
  width: 20px;
  &.liked{
    color: red;
  }
  &.not_liked{
    color: transparent;
  }
`;

export const LikeCount = styled.span`
  font-size: 20px;
  user-select: none;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
`;

export const Icon = styled.img`
  /* width: ${theme.spacing.s20};
  height: ${theme.spacing.s20};
  right: ${theme.spacing.s20};
  filter: ${({ theme }) => theme.svgFill.primary};
  position: absolute;
  cursor: pointer;
  user-select: none; */
  height: 100%;
  
`;

export const MoreWrapper = styled.ul`
  margin-left: auto;
  display:flex;
  flex-direction: row-reverse;
  gap: 3px;
  width: 24px;
  transition: 1s all;

  li {
    transition: 0.2s all;
    scale: 0.0;
  }

  li:first-child{
    scale: 1;
  }

  &.opened{
    width: initial;
    li {
      scale: 1;
    }
    li:first-child{
      transform: rotate(90deg);
    }
  }
`;

export const MoreWrapperItem = styled.li`
  width: 24px; 
  height: 24px;
`;

export const ConfirmationText = styled.p`
  text-align: center;
  font-size: 18px;
`;
export const ConfirmationMainText = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 22px;
`;

export const ConfirmationButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;

export const ConfirmationButton = styled.button`
  margin-top: 10px;
  font-size: 20px;
  width: 100px;
`;
