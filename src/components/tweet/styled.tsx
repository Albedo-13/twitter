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

export const LikeButton = styled.label`
  width: var(--like-size);
  height: var(--like-size);
  cursor: pointer;
`;

export const LikeWrapper = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: 15px;
  gap: 10px;
  &:hover {
    svg.liked {
      g,
      path {
        transition: 0.15s all;
        color: var(--like-hover-liked);
      }
    }
    svg.not_liked {
      g,
      path {
        transition: 0.15s all;
        color: var(--like-hover-not-liked);
      }
    }
  }
`;

export const LikeSVGOuter = styled.svg`
  position: absolute;
  height: var(--like-size);
  width: var(--like-size);
  &.liked {
    g,
    path {
      color: var(--like-outer-liked);
    }
  }
  &.not_liked {
    g,
    path {
      color: var(--like-outer-not-liked);
    }
  }
`;

export const LikeSVGInner = styled.svg`
  position: absolute;
  height: var(--like-size);
  width: var(--like-size);
  &.liked {
    g,
    path {
      color: var(--like-inner-liked);
    }
  }
  &.not_liked {
    g,
    path {
      color: var(--like-inner-not-liked);
    }
  }
`;

export const LikeCount = styled.span`
  font-size: 20px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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

  li:first-child {
    scale: 1;
  }

  &.opened {
    width: initial;
    li {
      scale: 1;
    }
    li:first-child {
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
