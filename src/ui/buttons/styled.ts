import styled from "styled-components";

// TODO: general button styles (cursor, sizes?, border?)
export const SignupButtonStyled = styled.button`
  font-weight: 500;
  font-size: 20px;
  color: #000;
  background-color: transparent;

  border: 1px solid #e4eaed;
  border-radius: 42px;
  width: 400px;
  min-height: 60px;
  transition: 0.2s all;
  margin-top: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: 0.2s all;
  }
`;

export const SignupButtonPrimaryStyled = styled.input<{ $width?: string }>`
  width: ${({ $width }) => $width || `calc(100%)`};
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

export const SignupButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;
