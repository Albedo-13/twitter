import styled from "styled-components";

import { theme } from "@/styles/theme";

export const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  border-bottom: var(--border-gray);

  display: flex;
  gap: 15px;
  cursor: default;

  /* @media ${theme.device.sm} {
    padding:  10}  5px;
    gap:  5px;
  } */
  ::-webkit-scrollbar {
    width: 5px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const BodyWrapper = styled.div`
  width: 0;
  flex-grow: 1;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const UserTag = styled.p`
  font-size: 18px;
  opacity: ${theme.opacity};
`;

export const UserTime = styled.time`
  font-size: 18px;
  opacity: ${theme.opacity};
`;

export const TweetText = styled.p`
  font-size: 18px;
  margin-top: 5px;
  width: calc(100% - 24px);
  overflow-wrap: break-word;
  max-height: 300px;
  overflow-y: auto;
`;

export const Image = styled.img`
  border-radius: 20px;
  margin-top: 15px;
  max-height: 330px;
  width: auto;
  max-width: 100%;
`;

export const SVGIcon = styled.svg`
  cursor: pointer;
  user-select: none;
  height: 100%;
  g,
  path {
    color: var(--text-primary-color);
  }
`;

export const MoreWrapper = styled.ul`
  margin-left: auto;
  display: flex;
  flex-direction: row-reverse;
  gap: 3px;
  width: 24px;
  transition: 1s all;

  li {
    transition: 0.2s all;
    scale: 0;
  }

  li:nth-child(1) {
    margin-left: 10px;
    scale: 1;
  }

  li:nth-child(2) {
    position: absolute;
    opacity: 0;
  }

  &.opened {
    width: initial;
    li {
      scale: 1;
    }
    li:nth-child(1) {
      transform: rotate(90deg);
      opacity: 0;
    }
    li:nth-child(2) {
      opacity: 1;
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

export const InteractionContainer = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: 20px;
`;
