import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  const { getUsersIDs, clearUsers, handleCollectChildData } =
    useAddUsersControls();
  const purge = usePurge();
  const { showModal, handleModalShow, handleModalClose } = useModalControls();
  const [chat, setChat] = useState<ChatsData | null>(null);

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

  return (
    <>
      <ChatWrapper>
        <Header
          // title={chat ? `${chat.name}` : ""}
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
                clickable
              />
              <AddUserButtonWrapper onClick={handleModalShow}>
                <AddButtonAvatar>+</AddButtonAvatar>
                <AddButtonText>Add users</AddButtonText>
              </AddUserButtonWrapper>
            </MembersWrapper>
          </>
        )}
      </ChatWrapper>
      {showModal && (
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <></>
            </Modal>
          }
        />
      )}
    </>
  );
}
