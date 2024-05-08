import { PropsWithChildren, ReactNode, SyntheticEvent, useEffect } from "react";

import { ModalClose, Overlay, StyledModal } from "./styled";

type ModalProps = {
  onClose: VoidFunction;
  children: PropsWithChildren<ReactNode>;
};

export function Modal({ onClose, children }: ModalProps) {
  const handleCloseClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleEscapeClick = (e: KeyboardEvent) => {
    if ((e as KeyboardEvent).key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleEscapeClick);
    return () => {
      document.body.removeEventListener("keydown", handleEscapeClick);
    };
  });

  return (
    <Overlay
      aria-modal="true"
      className="overlay"
      onMouseDown={handleCloseClick}
    >
      <StyledModal className="modal">
        <ModalClose
          className="modal__close"
          onClick={handleCloseClick}
          tabIndex={0}
        >
          &times;
        </ModalClose>
        {children}
      </StyledModal>
    </Overlay>
  );
}
