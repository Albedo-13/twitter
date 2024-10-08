import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@/styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
  padding: 10px;
  @media ${theme.device.md} {
    padding-top: 0;
  }
`;

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
  width: var(--avatar-image-size);
  height: var(--avatar-image-size);
`;

export const LogoWrapper = styled.div`
  /* margin-top: 20px; */
  margin-left: 20px;

  @media ${theme.device.md} {
    margin: 10px 0 0 15px;
    /* text-align: center; */
  }
  /* @media ${theme.device.sm} {
    margin: 10px 0 0 0;
    text-align: center;
  } */
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
    $isEnabled ? "var(--text-primary-color)" : "var(--text-secondary-color)"};
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

  @media ${theme.device.sm} {
    font-size: 16px;
    gap: 10px;
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
  margin-top: auto;
  padding-top: 25px;
  margin-bottom: 20px;
  @media ${theme.device.lg} {
    padding-top: 15px;
  }
`;

export const UserCard = styled.div`
  display: flex;
  box-sizing: content-box;
  gap: 10px;
  transition: 0.2s all;
  border-radius: 50px;
  &:hover {
    background-color: var(--link-hover-bg);
  }
  @media ${theme.device.md} {
    padding: 5px 15px;
    justify-content: center;
  }
`;

export const UserBlock = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  gap: 5px;
  overflow: hidden;
  @media ${theme.device.md} {
    display: none;
  }
`;

export const UserName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`;

export const UserTag = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: ${theme.opacity};
`;

export const PopupContainer = styled.div`
  background-color: var(--bg-primary-color);
  border: 1px var(--secondary-color) solid;
  box-shadow: 0px 2px 20px 1px var(--secondary-color);
  padding: 10px 0px;
  border-radius: 15px;
  overflow: hidden;
  max-width: 250px;
`;

export const LogOutButton = styled.button`
  transition: 0.2s all;
  font-size: 18px;
  font-weight: 700;
  width: 220px;
  background-color: transparent;
  border: 0;
  text-align: left;
  padding: 10px 0 10px 10px;
  outline: none;
  color: var(--text-primary-color);
  &:hover {
    background-color: var(--secondary-color);
  }
`;

export const Burger = styled.button`
  transition: 0.2s all;
  font-size: 18px;
  font-weight: 700;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: 0;
  /* text-align: left;  */
  /* padding: 10px 0 10px 10px; */
  /* outline: none; */
  color: var(--text-primary-color);
  /* &:hover {
    background-color: var(--secondary-color);
  } */
`;

export const SVGBurger = styled.svg`
  width: 25px;
  height: 25px;
`;
