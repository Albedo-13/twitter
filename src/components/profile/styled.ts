import styled from "styled-components";

export const ProfileWrapper = styled.div`
  border-top: none;
`;

export const ProfileHeader = styled.div`
  min-height: 50px;
  padding: 20px;
  border-bottom: 1px solid #d8d8d8;
`;

export const ProfileHeaderName = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #000;
`;

export const ProfileHeaderTweets = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #000;
  opacity: 0.6;
`;

export const ProfileBackgroundImage = styled.img`
  height: 280px;
  width: 100%;
`;

export const ProfileBody = styled.div`
  padding: 80px 25px 50px 25px;
  border-bottom: 1px solid #d8d8d8;
  position: relative;
`;

export const ProfileBodyName = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const ProfileBodyTag = styled.p`
  opacity: 0.6;
  margin-top: 5px;
`;

export const ProfileBodyStatus = styled.p`
  font-size: 18px;
  margin-top: 15px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: -75px;
  left: 10px;
`;

export const EditButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
