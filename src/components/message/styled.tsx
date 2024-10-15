import styled from "styled-components";

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const BodyWrapper = styled.div`
  /* width: 0; */
  background-color: var(--secondary-color);
  border-radius: 15px;
  padding: 8px;
  /* flex-grow: 1; */
`;

export const MessageText = styled.p`
  margin-top: 5px;
  width: 100%;
  max-width: 400px;
  /* width: calc(100% - 24px); */
  overflow-wrap: break-word;
  overflow-y: auto;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const UserName = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: var(--accents-color);
`;

export const MessageWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-end;
  &.messageByUser{
    justify-content: flex-end;
    ${AvatarWrapper}{
      display: none;
    }
    ${UserName}{
      display: none;
    }
    ${BodyWrapper}{
      background-color: var(--accents-color);
    }
  }
`;