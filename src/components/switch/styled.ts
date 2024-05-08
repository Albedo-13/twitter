import styled from "styled-components";

import { theme } from "@/styles/theme";

export const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: ${theme.spacing.s50};
  height: ${theme.spacing.s30};

  &:hover {
    .switch-slider {
      border: ${({ theme }) => theme.border.gray};
      border-width: 2px;

      &:before {
        border: ${({ theme }) => theme.border.gray};
        border-width: 2px;
      }
    }
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .switch-slider {
    &:before {
      transform: translateX(${theme.spacing.s20});
    }
  }
`;

export const SwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: ${({ theme }) => theme.border.gray};
  border-width: 2px;
  border-radius: calc(${theme.spacing.s35} - 1px);
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: calc(${theme.spacing.s25} + 1px);
    width: calc(${theme.spacing.s25} + 1px);
    left: -2px;
    bottom: -2px;
    border: ${({ theme }) => theme.border.gray};
    border-width: 2px;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
