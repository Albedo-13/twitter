import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { Message } from "@/components/message/message";
import { db } from "@/firebase";

import { MessagesListContainer, ScrollWindow } from "./styled";

type MessageData = {
  authorUid: string;
  createdAt: Timestamp;
  text: string;
  uid: string;
  image: string;
};

export const MessagesList = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<MessageData[] | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = collection(db, "chats", id!, "messages");
    onSnapshot(q, () => {
      const getMessages = async () => {
        const querySnapshot = await getDocs(
          query(
            collection(db, "chats", id!, "messages"),
            orderBy("createdAt", "asc")
          )
        );
        if (!querySnapshot.docs[0]) return [];
        const messages: MessageData[] = querySnapshot.docs.map(
          (doc) => doc.data() as MessageData
        );
        return messages;
      };
      getMessages().then((data: MessageData[]) => {
        setMessages(data);
      });
    });
  }, [id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <ScrollWindow>
      <MessagesListContainer>
        {messages === null
          ? ""
          : messages.map((data: MessageData, i) => {
              return <Message key={i} {...data} />;
            })}
        <div ref={messagesEndRef} />
      </MessagesListContainer>
    </ScrollWindow>
  );
};
