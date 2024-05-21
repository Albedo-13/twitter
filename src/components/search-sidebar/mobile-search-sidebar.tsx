import search from "@assets/icons/search.svg";

import { useModalControls } from "@/hooks/use-modal-controls";
import { Button } from "@/ui/buttons";

import { Modal } from "../modal/modal";
import { ModalPortal } from "../modal/modal-portal";
import { SearchSidebar } from "./search-sidebar";

export function MobileSearchSidebar() {
  const { showModal, handleModalShow, handleModalClose } = useModalControls();

  return (
    <>
      <Button
        variant="outlined"
        size="extra-small"
        type="button"
        icon={search}
        onClick={handleModalShow}
      >
        {" "}
      </Button>
      {showModal && (
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <SearchSidebar />
            </Modal>
          }
        />
      )}
    </>
  );
}
