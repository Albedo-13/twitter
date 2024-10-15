import styled from "styled-components";

export const ScrollWindow = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  height: 100%;

  /* &::-webkit-scrollbar{} */
`;

export const MessagesListWrapper = styled.div`
  height: 0;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;
