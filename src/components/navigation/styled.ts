import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@/styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.s10};
`;

export const LogoWrapper = styled.div`
  margin-top: ${theme.spacing.s20};
  margin-left: ${theme.spacing.s20};
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.s25};
  margin-top: ${theme.spacing.s30};
`;

export const NavListItem = styled.li`
  // TODO: remove
`;

export const NavListItemLink = styled(NavLink)<{ $isEnabled: boolean }>`
  text-decoration: none;
  padding-left: ${theme.spacing.s20};
  font-weight: ${theme.fontWeight.fw600};
  font-size: ${theme.fontSize.fs18};
  padding-left: ${theme.spacing.s20};
  display: flex;
  align-items: center;

  color: #000;
  color: ${({ $isEnabled }) => !$isEnabled && "#b3b8bb"};

  &.active {
    color: ${({ $isEnabled }) => $isEnabled && "#1da1f2"};
  }
`;

export const NavListItemImage = styled.img`
  width: ${theme.spacing.s25};
  height: ${theme.spacing.s25};
  padding-right: ${theme.spacing.s15};
`;

export const UserWrapper = styled.div`
  margin-top: ${theme.spacing.s50};
`;

export const UserCard = styled.div`
  display: flex;
  margin-left: ${theme.spacing.s10};
  gap: ${theme.spacing.s10};
`;

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing.s5};
`;

export const UserName = styled.div`
  font-weight: ${theme.fontWeight.fw600};
`;

export const UserTag = styled.div`
  opacity: 0.6;
`;
