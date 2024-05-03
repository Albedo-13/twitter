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
  height: 60px;
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

export const SignupButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;
