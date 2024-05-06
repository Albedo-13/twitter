import styled from "styled-components";

import { theme } from "@/styles/theme";

export const Overlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(${theme.blur});
  z-index: ${theme.layers.l2};
  
  height: 100vh;
  overflow-y: hidden;
`;

export const StyledModal = styled.div`
  background-color: #fff;
  max-width: ${theme.spacing.s330};
  border: ${theme.border.gray};
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${theme.spacing.s20};
  border-radius: ${theme.spacing.s10};
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 0px;
  right: calc(${theme.spacing.s5} + 2px);
  font-size: ${theme.fontSize.fs30};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }
`;
