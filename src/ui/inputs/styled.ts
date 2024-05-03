import styled from "styled-components";

export const StyledInput = styled.input<{ $width?: string }>`
  width: ${({ $width }) => $width || `calc(100% - 40px)`};
  border: 1px solid lightgray;
  padding: 20px;

  font-size: 14px;

  border-radius: 6px;
`;

export const StyledSelect = styled.select<{ $width?: string }>`
  width: ${({ $width }) => $width || `calc(100% - 40px)`};
  cursor: pointer;
  border: 1px solid lightgray;
  padding: 20px;

  font-size: 14px;

  border-radius: 6px;
  outline: none;
  appearance: none;

  transition: all 0.2s linear;
`;

export const StyledOption = styled.option``;