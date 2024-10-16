import styled from "styled-components";

export const ScrollWindow = styled.div`
  display: block;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 4px;

    &-thumb {
      /* border: 1px solid var(--bg-dark); */
      border-radius: 0px;
    }
    &-button {
      height: 0px;
    }
  }
  /* height: 200px; */
`;

export const MessagesListContainer = styled.div`
  height: 0;
  display: flex;
  gap: 10px;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;
