import styled from "styled-components";

export const StyledInput = styled.input<{ $width?: string; $margin?: string }>`
  width: ${({ $width }) => $width || `calc(100% - 40px)`};
  margin: ${({ $margin }) => $margin || `0`};
  border: 1px solid lightgray;
  padding: 20px;
  font-size: 18px;
  border-radius: 6px;
`;
