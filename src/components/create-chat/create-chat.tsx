import { useEffect } from "react";
import { Button } from "@/ui/buttons";
import { useModalControls } from "@/hooks/use-modal-controls";
import { Modal } from "../modal/modal";
import { ModalPortal } from "../modal/modal-portal";

import { CreateChatModal } from "./create-chat-modal";

import {
  CreateChatWrapper,
  MainText,
  DescrText,
  CreateChatHeaderButton,
} from "./styled";

// type Data = {
//   content: string;
//   image: FileList | null;
// };
//не забыть убирать Independed если есть хоть 1 диалог
export function CreateChat({
  type = "independed",
}: {
  type?: "header" | "independed";
}) {
  const { showModal, handleModalShow, handleModalClose } = useModalControls();

  useEffect(() => {
    handleModalClose();
  }, [location]);

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
              <CreateChatModal handleModalClose={handleModalClose}/>
            </Modal>
          }
        />
      )}
    </>
  );
}
