import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@/styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvatarWrapper = styled.div`
  width: var(--avatar-image-size);
  height: var(--avatar-image-size);
`;

export const LogoWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;

  @media ${theme.device.md} {
    margin: 10px 0 0 15px;
    /* text-align: center; */
  }
  @media ${theme.device.sm} {
    margin: 10px 0 0 0;
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 25px;

  & > * {
    width: 100%;
  }

  @media ${theme.device.md} {
    margin-top: 10px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media ${theme.device.md} {
    /* gap: 15px; */
    margin: 15px 0;
  }
`;

type NavListItemLinkType = {
  $isEnabled: boolean;
};

export const NavListItemLink = styled(NavLink)<NavListItemLinkType>`
  text-decoration: none;

  font-size: 18px;
  padding: 15px 0 15px 20px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  transition: 0.2s all;

  color: ${({ $isEnabled }) =>
    $isEnabled ? "var(--text-primary-color)" : "var(--secondary-color)"};
  font-weight: ${({ $isEnabled }) => ($isEnabled ? "300" : "100")};

  &.active {
    font-weight: 700;

    svg {
      &.inner > g > path {
        color: var(--text-primary-color);
      }
      &.outer > g > path {
        color: transparent;
      }
    }
  }

  &:hover {
    background-color: var(--link-hover-bg);
  }

  svg {
    position: absolute;
    &.inner {
      g,
      path {
        color: transparent;
      }
    }
    &.outer {
      g,
      path {
        color: var(--text-primary-color);
      }
    }
  }

  @media ${theme.device.md} {
    font-size: 0;
  }
`;

export const NavListItemImageWrapper = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  position: relative;

  @media ${theme.device.md} {
    width: 35px;
    height: 35px;
    margin: 0;
  }
`;
// filter: ${({ theme }) => theme.svgFill.primary};
export const UserWrapper = styled.div`
  margin-top: 50px;

  @media ${theme.device.lg} {
    margin-top: 0;
  }
`;

export const UserCard = styled.div`
  display: flex;
  box-sizing: content-box;
  gap: 10px;

  @media ${theme.device.lg} {
    display: none;
  }
`;

export const UserCardContainer = styled.div`
  width: 100%;
  margin-left: 10px;
`;

export const UserBlock = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const UserName = styled.div`
  font-weight: 600;
`;

export const UserTag = styled.div`
  opacity: ${theme.opacity};
`;
