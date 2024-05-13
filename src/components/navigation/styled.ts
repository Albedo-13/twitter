import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@/styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.s10};
`;

export const AvatarWrapper = styled.div`
  width: ${theme.spacing.s50};
  height: ${theme.spacing.s50};
`;

export const LogoWrapper = styled.div`
  margin-top: ${theme.spacing.s20};
  margin-left: ${theme.spacing.s20};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: ${theme.spacing.s25};

  & > * {
    width: 100%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.s25};
  margin-top: ${theme.spacing.s30};
`;

type NavListItemLinkType = {
  $isEnabled: boolean;
};

export const NavListItemLink = styled(NavLink)<NavListItemLinkType>`
  text-decoration: none;
  padding-left: ${theme.spacing.s20};
  font-weight: ${theme.fontWeight.fw600};
  font-size: ${theme.fontSize.fs18};
  padding-left: ${theme.spacing.s20};
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.color.text};
  color: ${({ theme, $isEnabled }) => !$isEnabled && theme.color.secondary};

  &.active {
    color: ${({ theme, $isEnabled }) => $isEnabled && theme.color.accents};
  }
`;

export const NavListItemImage = styled.img`
  width: ${theme.spacing.s25};
  height: ${theme.spacing.s25};
  padding-right: ${theme.spacing.s15};
  filter: ${({ theme }) => theme.svgFill.primary};
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
  opacity: ${theme.opacity};
`;
