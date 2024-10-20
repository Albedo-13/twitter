import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Chat } from "@/components/chat/chat";
import { Header } from "@/components/header/header";
import { ROUTES } from "@/constants/routes";
import { db } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";

import { ChatWrapper } from "./styled";

type ChatsData = {
  createAt: Date;
  image: string | null;
  members: string[];
  name: string;
  uid: string;
};

type validReasons = "chatDoesNotExist" | "userNotInChat";

export function ChatPage() {
  const { id } = useParams();
  const { uid } = useAppSelector(getUserSelector);
  const [chat, setChat] = useState<ChatsData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const purge = (reason: validReasons) => {
      switch (reason) {
        case "chatDoesNotExist":
          toast.error("There is no such chat!");
          break;
        case "userNotInChat":
          toast.error("You dont have permission to enter this chat!");
          break;
      }
      navigate(`${ROUTES.MESSAGES}`);
    };

    const getChatByUid = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "chats"), where("uid", "==", id))
      );

      if (!querySnapshot.docs.length) {
        purge("chatDoesNotExist");
        return;
      }

      const chatData: ChatsData = querySnapshot.docs[0].data() as ChatsData;

      if (!chatData.members.includes(uid)) {
        purge("userNotInChat");
        return;
      }

      setChat(chatData);
    };

    const q = collection(db, "chats");
    onSnapshot(q, () => {
      getChatByUid();
    });
  }, [id, uid, navigate]);

  return (
    <ChatWrapper>
      <Header title={chat ? `${chat.name}` : ""} />
      {chat === null ? null : <Chat {...chat} />}
    </ChatWrapper>
  );
}
