import { useState, useEffect } from "react";
import { Avatar } from "@/components/avatar/avatar";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/firebase";

import noAvatar from "@/assets/imgs/no_avatar.png";

import { ROUTES } from "@/constants/routes";

import {
  ChatsContainer,
  ChatWrapper,
  ChatName,
  ChatTag,
  ChatInfoWrapper,
  AvatarWrapper,
} from "./styled";

type ChatsData = {
  image: string | null;
  members: string[];
  name: string;
  uid: string;
};

type ChatsListProps = {
  chats: ChatsData[];
};

export const ChatsList = ({ chats }: ChatsListProps) => {
  return (
    <ChatsContainer>
      {chats.map((data, i) => (
        <Chat key={i} {...data} />
      ))}
    </ChatsContainer>
  );
};

const Chat = ({ image, members, name, uid }: ChatsData) => {
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);

  const getImageUrl = async () => {
    try {
      if (image === null) return;
      const url = await getDownloadURL(ref(storage, image));
      return url;
    } catch (error) {
      return undefined;
    }
  };

  useEffect(() => {
    getImageUrl()
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(undefined));
  }, []);

  return (
    <ChatWrapper to={`${ROUTES.CHAT}/${uid}`}>
      <AvatarWrapper>
        <Avatar src={imgUrl || noAvatar} />
      </AvatarWrapper>
      <ChatInfoWrapper>
        <ChatName>{name}</ChatName>
        <ChatTag>{members.length} members</ChatTag>
      </ChatInfoWrapper>
    </ChatWrapper>
  );
};
