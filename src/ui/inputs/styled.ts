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

export const SignupButtonPrimaryStyled = styled.input<{
  $width?: string;
  $margin?: string;
}>`
  width: ${({ $width }) => $width || `calc(100%)`};
  margin: ${({ $margin }) => $margin || `0`};
  border-radius: 76px;
  font-weight: 700;
  font-size: 18px;
  border: none;

  color: #fff;
  background: #1da1f2;

  min-height: 60px;
  cursor: pointer;
`;

export const LogoutButton = styled(SignupButtonPrimaryStyled)`
  background: #b3b8bb;
`;

export const StyledOption = styled.option``;
