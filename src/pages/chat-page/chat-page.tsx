import { Header } from "@/components/header/header";
import { Chat } from "@/components/chat/chat";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { db } from "@/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { toast } from "react-toastify";

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
  const user = useAppSelector(getUserSelector);
  const [chat, setChat] = useState<ChatsData | null>(null);
  const navigate = useNavigate();

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

    if (!chatData.members.includes(user.uid)) {
      purge("userNotInChat");
      return;
    }

    setChat(chatData);
  };

  useEffect(() => {
    const q = collection(db, "chats");
    onSnapshot(q, () => {
      getChatByUid();
    });
  }, []);

  return (
    <ChatWrapper>
      <Header title={chat ? `${chat.name}` : ""} />
      {chat === null ? <></> : <Chat {...chat} />}
    </ChatWrapper>
  );
}
