import { useState } from "react";

import { shouldDisableScroll } from "@/constants/modal-helpers";

export function useModalControls() {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  shouldDisableScroll(showModal);
  return {
    showModal,
    handleModalShow,
    handleModalClose,
  };
}
