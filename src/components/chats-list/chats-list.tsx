import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";

import noAvatar from "@/assets/imgs/no_avatar.png";
import { Avatar } from "@/components/avatar/avatar";
import { ROUTES } from "@/constants/routes";
import { storage } from "@/firebase";

import {
  AvatarWrapper,
  ChatInfoWrapper,
  ChatName,
  ChatsContainer,
  ChatTag,
  ChatWrapper,
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
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        if (image === null) return null;
        const url = await getDownloadURL(ref(storage, image));
        return url;
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    getImageUrl()
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(null));
  }, [image]);

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
