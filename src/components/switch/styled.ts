import styled from "styled-components";

export const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;

  &:hover {
    .switch-slider {
      border: 2px solid #d8d8d8;

      &:before {
        border: 2px solid #d8d8d8;
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
      transform: translateX(20px);
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
  transition: 0.4s;
  border: 2px solid #d8d8d8;
  border-radius: calc(35px - 1px);

  &:before {
    position: absolute;
    content: "";
    height: calc(25px + 1px);
    width: calc(25px + 1px);
    left: -2px;
    bottom: -2px;
    border: 2px solid #d8d8d8;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
