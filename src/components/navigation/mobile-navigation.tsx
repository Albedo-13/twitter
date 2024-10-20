import { useEffect } from "react";

import { useModalControls } from "@/hooks/use-modal-controls";

import { Modal } from "../modal/modal";
import { ModalPortal } from "../modal/modal-portal";
import { Navigation } from "./navigation";
import { Burger, SVGBurger } from "./styled";

export default function MobileNavigation() {
  const { showModal, handleModalShow, handleModalClose } = useModalControls();

  useEffect(() => {
    handleModalClose();
  }, [handleModalClose]);

  return (
    <>
      <Burger onClick={handleModalShow}>
        <SVGBurger viewBox="4 0 22 22" fill="none">
          <path
            d="M4 18L20 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </SVGBurger>
      </Burger>
      {showModal && (
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <Navigation />
            </Modal>
          }
        />
      )}
    </>
  );
}
