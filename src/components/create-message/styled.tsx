import styled from "styled-components";

export const CreateMessageWrapper = styled.div`
  display: flex;
  padding: 5px 10px 10px 10px;
  height: 100%;
  align-items: baseline;
  gap: 10px;
  background-color: red;
  align-items: flex-end;
`;

export const Input = styled.textarea`
  flex-grow: 1;
  padding: 0;
  height: 41px;
  min-height: 41px;
  max-height: 200px;
  overflow-y: auto;
  border: none;
  resize: none;
  font-size: 18px;
  background-color: var(--bg-primary-color);
  &:focus {
    transition: 0s all;
    outline: none;
    /* border-bottom: 1px solid var(--accents-color); */
  }

  &::placeholder {
    font-size: 22px;
    color: #828282;
  }
`;

export const Send = styled.button`
  height: 15px;
  width: 15px;
  border-radius: 100%;
`;
