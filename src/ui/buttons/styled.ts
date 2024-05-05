import styled, { css } from "styled-components";

const Button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    transition: 0.2s all;
  }
`;

const primaryStyles = css`
  color: #fff;
  background: #1da1f2;
  border: none;

  &:disabled {
    opacity: 0.4;
  }
`;

const outlinedStyles = css`
  border: 1px solid #e4eaed;
  background-color: transparent;
`;

const secondaryStyles = css`
  border: none;
  color: #fff;
  background-color: #b3b8bb;
`;

const smallStyles = css`
  min-height: 44px;
  min-width: 120px;

  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
`;

const mediumStyles = css`
  min-height: 55px;
  min-width: 230px;
  border-radius: 27px;

  font-size: 18px;
  font-weight: 700;
`;

const largeStyles = css`
  min-height: 60px;
  min-width: 100%;
  border-radius: 42px;

  font-size: 20px;
  font-weight: 600;
`;

export const StyledButton = styled.button<{
  $variant: "primary" | "outlined" | "secondary";
  $size: "small" | "medium" | "large";
  $margin?: string;
}>`
  ${Button}

  ${({ $variant }) => $variant === "primary" && primaryStyles}
  ${({ $variant }) => $variant === "outlined" && outlinedStyles}
  ${({ $variant }) => $variant === "secondary" && secondaryStyles}
  
  ${({ $size }) => $size === "small" && smallStyles}
  ${({ $size }) => $size === "medium" && mediumStyles}
  ${({ $size }) => $size === "large" && largeStyles}

  margin: ${({ $margin }) => $margin};
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;
