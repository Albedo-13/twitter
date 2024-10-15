import { useEffect, useState } from "react";
import { db } from "@/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Message } from "@/components/message/message";

import { ScrollWindow, MessagesListWrapper } from "./styled";

type MessageData = {
  authorUid: string;
  createdAt: Timestamp;
  text: string;
  uid: string;
};

export const MessagesList = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<MessageData[] | null>(null);
  // const scrollElem = useRef<any>();

  const getMessages = async () => {
    const querySnapshot = await getDocs(
      query(
        collection(db, "chats", id!, "messages"),
        orderBy("createdAt", "asc")
      )
    );
    if (!querySnapshot.docs[0]) throw new Error("no post by this id");
    const messages = querySnapshot.docs.map((doc) => doc.data());
    return messages;
  };
  // container.scrollTop = container.scrollHeight;
  useEffect(() => {
    const q = collection(db, "posts");
    onSnapshot(q, () => {
      getMessages().then((data: any) => {
        setMessages(data);
        // scrollElem.current.scrollTop = e.currentTarget.scrollHeight;
        // onClick={(e: any) => {
        //   e.currentTarget
        // }}
        // container.scrollTop = container.scrollHeight;
        // messagesListElem.current.scrollTop = messagesListElem.current.scrollHeight;
      });
    });
    // container.scrollTop = container.scrollHeight;
  }, []);

  return (
    <ScrollWindow
    // ref={scrollElem}
    >
      <MessagesListWrapper>
        {messages === null
          ? "Loading..."
          : messages.map((data: MessageData, i) => {
              return <Message key={i} {...data} />;
            })}
      </MessagesListWrapper>
    </ScrollWindow>
  );
};
