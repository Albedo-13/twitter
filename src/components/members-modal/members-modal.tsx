import { doc, updateDoc } from "firebase/firestore";
import { useRef } from "react";
import { toast } from "react-toastify";

import { AddUsersToChat } from "@/components/create-chat/add-users-to-chat";
import { Member } from "@/components/member/member";
import { Modal } from "@/components/modal/modal";
import { ModalPortal } from "@/components/modal/modal-portal";
import { db } from "@/firebase";
import { useModalControls } from "@/hooks/use-modal-controls";
import { UserBasicType } from "@/types";
import { Button } from "@/ui/buttons";

import { AddButt, AdminPanel, ButtonWrapper } from "./styled";

type MembersModalProps = {
  members: string[];
  adminId: string;
  chatId: string;
  isAdminView: boolean;
};

type ChildData = {
  [key: string]: boolean;
};
//TODO: не показывать в поиске тех, кто уже в группе
export function MembersModal({
  members,
  adminId,
  chatId,
  isAdminView,
}: MembersModalProps) {
  const childData = useRef<ChildData>({});

  const handleCollectChildData = (id: string, state: boolean) => {
    childData.current[id] = state;
  };

  const convertCollectedChildData = (data: {}) => {
    const res: string[] = [];
    for (const [key, value] of Object.entries(data)) {
      if (value) res.push(key);
    }
    return res;
  };

  const { showModal, handleModalShow, handleModalClose } = useModalControls();

  const handleMemberAddClick = () => {
    const usersToAdd = convertCollectedChildData(childData.current);
    const newMembers = [...members, ...usersToAdd];

    const chatRef = doc(db, "chats", chatId);
    updateDoc(chatRef, {
      members: newMembers,
    });
    childData.current = {};
    handleModalClose();
    toast.success(`Succesfully added ${usersToAdd.length} users!`);
  };

  const handleMemberKickClick = ({ uid, displayName }: UserBasicType) => {
    if (!isAdminView) {
      console.log("YOU SHALL NOT PASS!");
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }

    if (uid) {
      if (uid === adminId) {
        toast.error("You cant kick admin!");
        return;
      }
      try {
        const newMembers = members.filter((member) => member !== uid);

        const chatRef = doc(db, "chats", chatId);
        updateDoc(chatRef, {
          members: newMembers,
        });

        toast.success(`Succesfully kicked ${displayName}!`);
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong...");
      }
    }
  };

  return (
    <>
      {isAdminView && (
        <>
          <AdminPanel>
            <p>Admin view</p>
            <AddButt onClick={handleModalShow}>Add user</AddButt>
          </AdminPanel>
        </>
      )}
      {members.map((id) => (
        <Member
          id={id}
          key={id}
          adminId={adminId}
          isAdminView={isAdminView}
          handleMemberKickClick={handleMemberKickClick}
        />
      ))}
      {showModal && (
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <AddUsersToChat
                handleCollectChildData={handleCollectChildData}
                activeChilds={members}
              />
              <ButtonWrapper>
                <Button
                  variant="primary"
                  size="small"
                  onClick={handleMemberAddClick}
                >
                  Add users
                </Button>
              </ButtonWrapper>
            </Modal>
          }
        />
      )}
    </>
  );
}
