import styled from "styled-components";

export const Overlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(6px);
  z-index: 10;
  
  height: 100vh;
  overflow-y: hidden;
`;

export const StyledModal = styled.div`
  background-color: #fff;
  max-width: 330px;
  border: 1px solid #d8d8d8;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 0px;
  right: 7px;
  font-size: 30px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }
`;
