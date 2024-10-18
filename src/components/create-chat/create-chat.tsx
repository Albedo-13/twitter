import { useEffect } from "react";

import { useModalControls } from "@/hooks/use-modal-controls";
import { Button } from "@/ui/buttons";

import { Modal } from "../modal/modal";
import { ModalPortal } from "../modal/modal-portal";
import { CreateChatModal } from "./create-chat-modal";
import {
  CreateChatHeaderButton,
  CreateChatWrapper,
  DescrText,
  MainText,
} from "./styled";

type CreateChatProps = {
  type?: "header" | "independed";
};

export function CreateChat({ type = "independed" }: CreateChatProps) {
  const { showModal, handleModalShow, handleModalClose } = useModalControls();

  useEffect(() => {
    handleModalClose();
  }, [handleModalClose]);

  return (
    <>
      {
        {
          header: (
            <CreateChatHeaderButton onClick={handleModalShow}>
              +
            </CreateChatHeaderButton>
          ),
          independed: (
            <CreateChatWrapper>
              <MainText>Welcome to your inbox!</MainText>
              <DescrText>
                Drop a line, share posts and more with private conversations
                between you and others.
              </DescrText>

              <Button variant="primary" size="large" onClick={handleModalShow}>
                Create new Chat
              </Button>
            </CreateChatWrapper>
          ),
        }[type]
      }
      {showModal && (
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <CreateChatModal handleModalClose={handleModalClose} />
            </Modal>
          }
        />
      )}
    </>
  );
}
