import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useModalControls } from "@/hooks/use-modal-controls";

import { Modal } from "../modal/modal";
import { ModalPortal } from "../modal/modal-portal";
import { Navigation } from "./navigation";

import { Burger, SVGBurger } from "./styled";

export default function MobileNavigation() {
  const { showModal, handleModalShow, handleModalClose } = useModalControls();
  const location = useLocation();

  useEffect(() => {
    handleModalClose();
  }, [location]);

  return (
    <>
      <Burger
        // icon={menu}
        onClick={handleModalShow}
      >
        <SVGBurger viewBox="4 0 22 22" fill="none">
          <path
            d="M4 18L20 18"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
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
