import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import menu from "/nav-icons/more.svg";
import { useModalControls } from "@/hooks/use-modal-controls";
import { Button } from "@/ui/buttons";

import { Modal } from "../modal/modal";
import { ModalPortal } from "../modal/modal-portal";
import { Navigation } from "./navigation";

export default function MobileNavigation() {
  const { showModal, handleModalShow, handleModalClose } = useModalControls();
  const location = useLocation();

  useEffect(() => {
    handleModalClose();
  }, [location]);

  return (
    <>
      <Button
        variant="primary"
        size="extra-small"
        type="button"
        icon={menu}
        onClick={handleModalShow}
      >
        {" "}
      </Button>
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
