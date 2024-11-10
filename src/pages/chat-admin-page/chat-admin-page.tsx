import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { AddUsers } from "@/components/add-users/add-users";
import { Avatar } from "@/components/avatar/avatar";
import { Header } from "@/components/header/header";
import { Modal } from "@/components/modal/modal";
import { ModalPortal } from "@/components/modal/modal-portal";
import { Time } from "@/components/tweet/time";
import { db } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { useAddUsersControls } from "@/hooks/use-add-users-controls";
import { useModalControls } from "@/hooks/use-modal-controls";
import { usePurge } from "@/hooks/use-purge";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { ChatsData } from "@/types";

import {
  AddButtonAvatar,
  AddButtonText,
  AddUserButtonWrapper,
  AvatarWrapper,
  ChatWrapper,
  CreatedAt,
  InformationWrapper,
  MembersCount,
  MembersWrapper,
  Name,
} from "./styled";

export function ChatAdminPage() {
  const { id } = useParams();
  const user = useAppSelector(getUserSelector);
  const { handleCollectChildData } = useAddUsersControls();
  const purge = usePurge();
  const { showModal, handleModalShow, handleModalClose } = useModalControls();
  const [chat, setChat] = useState<ChatsData | null>(null);
  const [freeze, setFreeze] = useState<boolean>(false);

  useEffect(() => {
    const getChatByUid = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "chats"), where("uid", "==", id))
      );

      if (!querySnapshot.docs.length) purge("chatDoesNotExist");

      const chatData: ChatsData = querySnapshot.docs[0].data() as ChatsData;

      if (!chatData.members.includes(user.uid)) purge("userNotInChat");

      if (user.uid !== chatData.admin) purge("notAnAdmin");

      setChat(chatData);
    };

    const q = collection(db, "chats");
    onSnapshot(q, () => {
      getChatByUid();
    });
  }, [id, user.uid]);

  const handleRemove = async (uid: string, displayname: string) => {
    try {
      if (!chat) return;
      setFreeze(true);
      const newMembers = chat.members.filter((member) => member !== uid);

      const chatRef = doc(db, "chats", chat.uid);
      await updateDoc(chatRef, {
        members: newMembers,
      });
      toast.success(`${displayname} kicked!`);
      setFreeze(false);
    } catch (error) {
      toast.error(`Something went wrong!`);
      setFreeze(false);
    }
  };

  const handleAdd = async (uid: string, displayname: string) => {
    try {
      if (!chat) return;
      setFreeze(true);
      const newMembers = [...chat.members, uid];

      const chatRef = doc(db, "chats", chat.uid);
      await updateDoc(chatRef, {
        members: newMembers,
      });
      toast.success(`${displayname} added!`);

      setFreeze(false);
      handleModalClose();
    } catch (error) {
      toast.error(`Something went wrong!`);
      setFreeze(false);
      handleModalClose();
    }
  };

  return (
    <>
      <ChatWrapper>
        <Header
          titleOnClick={handleModalShow}
          description={chat ? `Admin Panel` : ""}
        />

        {chat && (
          <>
            <InformationWrapper>
              <AvatarWrapper>
                <Avatar src={chat.image!} />
              </AvatarWrapper>
              <Name>{chat.name}</Name>
              <CreatedAt>
                <Time
                  seconds={chat.createdAt.seconds}
                  textBefore="Created at "
                />
              </CreatedAt>
              <MembersCount>{`${chat.members.length} members`}</MembersCount>
            </InformationWrapper>
            <MembersWrapper>
              <AddUsers
                handleCollectChildData={handleCollectChildData}
                adminId={chat.admin}
                showOnly={chat.members}
                style={{
                  marginBottom: "0",
                }}
                remove={handleRemove}
                freeze={freeze}
              />
              <AddUserButtonWrapper onClick={handleModalShow}>
                <AddButtonAvatar>+</AddButtonAvatar>
                <AddButtonText>Add users</AddButtonText>
              </AddUserButtonWrapper>
            </MembersWrapper>
          </>
        )}
      </ChatWrapper>
      {showModal && chat && (
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <AddUsers
                exclude={chat.members}
                onUserClick={handleAdd}
                style={{
                  marginBottom: "0",
                }}
                freeze={freeze}
                clickable
              />
            </Modal>
          }
        />
      )}
    </>
  );
}
