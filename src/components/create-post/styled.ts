import styled from "styled-components";

export const CreatePostWrapper = styled.form`
  position: relative;
  display: flex;
  gap: 15px;
  padding: 20px;
  border-bottom: 1px solid #d8d8d8;
`;

export const FormWrapper = styled.form`
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: calc(100% - 40px);

  border: none;
  resize: none;
  height: 80px;
  font-size: 18px;

  &::placeholder {
    font-size: 22px;
    color: #828282;
  }
`;

export const FileInputWrapper = styled.div`
  cursor: pointer;
`;

export const FileInputImage = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const BasementWrapper = styled.div`
  display: flex;
  width: calc(100% - 40px);
  justify-content: space-between;
`;
