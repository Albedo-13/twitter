import styled from "styled-components";

export const ChatWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Members = styled.div`
  /* margin: 5px 0 5px 20px; */
  font-weight: 300;
  margin-left: 20px;
  position: absolute;
  top: -20px;
  color: var(--text-secondary-color);
`

export const MessagesListWrapper = styled.div`
height: 100%;
`;

export const MessageInput = styled.div`
  flex-shrink: 0;
  border-top: var(--border-gray);
  /* background-color: var(--secondary-color); */
  min-height: 56px;
`;
