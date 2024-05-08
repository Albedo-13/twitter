import styled, { css } from "styled-components";

import { theme } from "@/styles/theme";

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
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.accents};
  border: none;

  &:disabled {
    opacity: ${theme.opacity};
  }
`;

const outlinedStyles = css`
  border: ${({ theme }) => theme.border.gray};
  background-color: transparent;
`;

const secondaryStyles = css`
  border: none;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.secondary};
`;

const smallStyles = css`
  min-height: ${theme.spacing.s45};
  min-width: ${theme.spacing.s120};

  border-radius: ${theme.spacing.s50};
  font-size: ${theme.fontSize.fs18};
  font-weight: ${theme.fontWeight.fw700};
`;

const mediumStyles = css`
  min-height: ${theme.spacing.s55};
  min-width: ${theme.spacing.s230};
  border-radius: ${theme.spacing.s25};

  font-size: ${theme.fontSize.fs18};
  font-weight: ${theme.fontWeight.fw700};
`;

const largeStyles = css`
  min-height: ${theme.spacing.s60};
  border-radius: ${theme.spacing.s40};

  font-size: ${theme.fontSize.fs20};
  font-weight: ${theme.fontWeight.fw600};

  min-width: 100%;
`;

type StyledButtonType = {
  $variant: "primary" | "outlined" | "secondary";
  $size: "small" | "medium" | "large";
  $margin?: string;
};

export const StyledButton = styled.button<StyledButtonType>`
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
  width: ${theme.spacing.s30};
  height: ${theme.spacing.s30};
`;
