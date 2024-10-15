import styled from "styled-components";

export const CreateMessageWrapper = styled.form`
  display: flex;
  padding: 5px 10px 10px 10px;
  height: 100%;
  align-items: baseline;
  gap: 15px;
  /* background-color: red; */
  align-items: flex-end;
`;

export const Input = styled.textarea`
  flex-grow: 1;
  padding: 7px 5px 8px;
  height: 36px;
  min-height: 36px;
  max-height: 210px;
  overflow-y: auto;
  border: none;
  resize: none;
  font-size: 18px;
  background-color: var(--bg-primary-color);

  &:focus {
    transition: 0s all;
    outline: none;
    border-bottom: 1px solid var(--accents-color);
  }
  &.error:focus {
    border-bottom: 1px solid var(--error-color);
  }
  &::placeholder {
    font-size: 18px;
    color: #828282;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Send = styled.button`
  height: 36px;
  width: 36px;
  transition: 0.2s all;
  background-color: transparent;
  border: 0;
  padding: 5px;
  border-radius: 100px;
  & > svg > path {
    color: var(--primary-color);
  }
  &:hover > svg > path {
    transition: 0.2s all;
    color: var(--accents-color);
  }
`;

export const SendSVG = styled.svg`
  height: 100%;
  width: 100%;
`;
