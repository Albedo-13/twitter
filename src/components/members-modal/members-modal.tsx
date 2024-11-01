import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { AddUsers } from "@/components/add-users/add-users";
import { Member } from "@/components/member/member";
import { Modal } from "@/components/modal/modal";
import { ModalPortal } from "@/components/modal/modal-portal";
import { db } from "@/firebase";
import { useAddUsersControls } from "@/hooks/use-add-users-controls";
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

//TODO: не показывать в поиске тех, кто уже в группе
export function MembersModal({
  members,
  adminId,
  chatId,
  isAdminView,
}: MembersModalProps) {
  const { getUsersIDs, clearUsers, handleCollectChildData } =
    useAddUsersControls();
  const { showModal, handleModalShow, handleModalClose } = useModalControls();

  const handleMemberAddClick = () => {
    const usersToAdd = getUsersIDs();
    const newMembers = [...members, ...usersToAdd];

    const chatRef = doc(db, "chats", chatId);
    updateDoc(chatRef, {
      members: newMembers,
    });

    clearUsers();
    handleModalClose();
    toast.success(`Succesfully added ${usersToAdd.length} users!`);
  };

  // const handleMemberKickClick = ({ uid, displayName }: UserBasicType) => {
  //   if (!isAdminView) {
  //     console.log("YOU SHALL NOT PASS!");
  //     window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  //   }

  //   if (uid) {
  //     if (uid === adminId) {
  //       toast.error("You cant kick admin!");
  //       return;
  //     }
  //     try {
  //       const newMembers = members.filter((member) => member !== uid);

  //       const chatRef = doc(db, "chats", chatId);
  //       updateDoc(chatRef, {
  //         members: newMembers,
  //       });

  //       toast.success(`Succesfully kicked ${displayName}!`);
  //     } catch (err) {
  //       console.error(err);
  //       toast.error("Something went wrong...");
  //     }
  //   }
  // };

  return (
    <>
      {isAdminView ? (
        <>
          <AddUsers
            handleCollectChildData={handleCollectChildData}
            showOnly={members}
            adminId={adminId}
            clickable
            // showAdmin
            // activeChilds={members}
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
        </>
      ) : (
        <AddUsers
          handleCollectChildData={handleCollectChildData}
          showOnly={members}
          adminId={adminId}
          // showAdmin
          // activeChilds={members}
        />
      )}
      {/* {isAdminView && (
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
      )} */}
    </>
  );
}
