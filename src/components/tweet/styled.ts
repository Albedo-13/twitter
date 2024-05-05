import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  border-bottom: 1px solid #d8d8d8;

  display: flex;
  gap: 15px;
`;

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const UserTag = styled.p`
  font-weight: 400;
  font-size: 18px;
  opacity: 0.6;
`;

export const TweetText = styled.p`
  font-size: 18px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  margin: 15px 0;
`;
