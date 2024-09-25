import styled from "styled-components";

import { theme } from "@/styles/theme";

export const FileInputPreviewImage = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 100%;
  max-height: 200px
  /* height: 100px; */
`;

export const CreatePostWrapper = styled.div`
  position: relative;
  display: flex;
  gap: ${theme.spacing.s15};
  padding: ${theme.spacing.s20};
  border-bottom: ${({ theme }) => theme.border.gray};
`;

export const AvatarWrapper = styled.div`
  width: ${theme.spacing.s50};
  height: ${theme.spacing.s50};
`;

export const FormWrapper = styled.form`
  width: 100%;
  position: relative;
`;

export const Textarea = styled.textarea`
  width: 100%;
  /* border: none; */
  resize: none;
  height: ${theme.spacing.s80};
  font-size: ${theme.fontSize.fs18};

  &::placeholder {
    font-size: ${theme.fontSize.fs22};
    color: #828282;
  }
`;

export const FileInputWrapper = styled.div`
  cursor: pointer;
`;

export const FileInputImage = styled.img`
  width: ${theme.spacing.s25};
  height: ${theme.spacing.s25};
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const BasementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ErrorWrapper = styled.div`
  position: absolute;
  bottom: ${theme.spacing.s25};
  left: ${theme.spacing.s50};
`;
