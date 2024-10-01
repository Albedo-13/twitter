import styled from "styled-components";

import { theme } from "@/styles/theme";

export const ProfileWrapper = styled.div`
  border-top: none;
`;

export const ProfileHeader = styled.div`
  min-height:  50px;
  padding:  20px;
  border-bottom: var(--border-gray);
`;

export const ProfileHeaderName = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const ProfileBackgroundImage = styled.img`
  object-fit: cover;
  height: 280px;
  width: 100%;
`;

export const ProfileBody = styled.div`
  padding: 80px 25px 50px 25px;
  border-bottom: var(--border-gray);
  position: relative;
`;

export const ProfileBodyName = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const ProfileBodyTag = styled.p`
  opacity: ${theme.opacity};
  margin-top: 5px;
`;

export const ProfileBodyStatus = styled.p`
  font-size: 18px;
  margin-top: 15px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  top: -75px;
  left: 10px;
`;

export const EditButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
