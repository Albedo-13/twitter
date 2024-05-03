import styled from "styled-components";

export const StyledAvatar = styled.img<{ $width?: string }>`
  width: ${({ $width }) => $width || `50px`};
  height: ${({ $width }) => $width || `50px`};
`;
